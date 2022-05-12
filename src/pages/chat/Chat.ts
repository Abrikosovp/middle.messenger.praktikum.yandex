import Block from "../../modules/block/Block";
import {template} from "./template";
import ChatSide from "../../components/sideChat";
import SideMessages from "../../components/sideMessages";
import {TRenderElement} from "../../utils/types/types";
import ChatService from "../../modules/services/chatService";
import {getUrlParam} from "../../utils/urlParam/getUrlParam";

export class Chat extends Block {

    constructor(props: any) {
        super("div",["chat-page"], {
            ...props,
            chatSide: new ChatSide(),
            chatContent: new SideMessages(),
        });
        ChatService.getChats()
    }

    async openChat(): Promise<void> {
        const urlParam = getUrlParam();
        if (urlParam) {
            const chatId = parseFloat(urlParam);
            ChatService.closeSocket(chatId);
            await ChatService.getChat(chatId);
        }
    }

    async componentDidMount(): Promise<void> {
        await ChatService.getChats();
        await this.openChat();
    }

    protected render(): TRenderElement {
        return this.compile(template, this.props);
    }
}

export default Chat;
