import ChatsApi from "../api/ChatsApi";
import {
    getActiveChat,
    getUser,
    setActiveChat,
    setChats, setErrorTextForm,
    setMessageList,
    setNewMessage,
    setUsersToChat
} from "../store/actions";
import {ENDPOINTS} from "../api/consts";
import {generateWSSParam} from "../../utils/generateWSSParam/generateWSSParam";
import ChatDataApi from "../api/ChatDataApi";
import {CreateChatRequest, UserToChatRequest} from "../../pages/chat/type";
import Router from "../Router";
import {RouterLinks} from "../../utils/const/const";

class ChatService {

    socket: WebSocket | null;

    public async getChats(): Promise<void> {
        try {
            const response = await ChatsApi.request();
            setChats(response);
        } catch (e) {
            setErrorTextForm(e.reason);
        }
    }

    public sendMessageSocket(message: string): void {
        if (this.socket) {
            this.socket.send(generateWSSParam('message', message));
        }
    }

    public initSocket(userId: number, chatId: number, token: string): void {
        if (!this.socket) {
            this.socket = new WebSocket(
                `${ENDPOINTS.WSS}${ENDPOINTS.CHATS.PATH}/${userId}/${chatId}/${token}`,
            );
        }
        this.socket.addEventListener('open', () => {
            console.log('Соединение установлено');
            this.socket?.send(generateWSSParam('get old', '0'));
        });

        this.socket.addEventListener('close', () => {
            console.log('Соединение закрыто');
            this.socket = null;
        });

        this.socket.addEventListener('message', async (event) => {
            const data = JSON.parse(event.data);
            if (Array.isArray(data)) {
                setMessageList(data);
            } else if (data.type === 'message') {
                setNewMessage(data);
                await this.getChats();
            }
        });
    }

    public closeSocket(chatId: number): void {
        const chat = getActiveChat();
        if (this.socket && chatId !== chat?.chatId) {
            this.socket.close();
            setMessageList([]);
        }
    }

    public async getChat(payload: number): Promise<void> {
        try {
            const chatUsers = await ChatDataApi.request(payload);
            const {token} = await ChatDataApi.getToken(payload);
            setActiveChat({
                chatId: payload,
                token: token,
                users: chatUsers,
                messageList: null,
            });
            const user = getUser();
            if (user) {
                this.initSocket(user.id, payload, token);
            }
        } catch (e) {
            setErrorTextForm(e.reason);
        }
    }

    public async getChatUsers(payload: number): Promise<void> {
        try {
            const chatInfo = await ChatDataApi.request(payload);
            setUsersToChat(chatInfo);
        } catch (e) {
            setErrorTextForm(e.reason);
        }
    }

    public async addUserToChat(payload: UserToChatRequest): Promise<void> {
        try {
            await ChatDataApi.update(payload);
            Router.go(RouterLinks.CHATS);
            await this.getChatUsers(payload.chatId);
        } catch (e) {
            setErrorTextForm(e.reason);
        }
    }

    public async createChat(payload: CreateChatRequest): Promise<void> {
        try {
            await ChatsApi.create(payload);
            await this.getChats();
            Router.go(RouterLinks.CHATS);
        } catch (e) {
            setErrorTextForm(e.reason);
        }
    }
}


export default new ChatService();
