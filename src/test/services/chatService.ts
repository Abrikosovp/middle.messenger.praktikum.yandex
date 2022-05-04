// import {setChats} from "../store/actions";
import ChatsApi from "../api/ChatsApi";
import {setChats} from "../store/actions";

class ChatService {

    socket: WebSocket | null;

    public async getChats(): Promise<void> {
        try {
            const response = await ChatsApi.request();
            setChats(response);
        } catch (e) {
            console.error(e);
        }
    }

}


export default new ChatService();
