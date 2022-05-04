import Block from "../../modules/block/Block";
import {template} from "./template";
import ChatSide from "../../components/chatSide";
import ChatContent from "../../components/chatContent";
import {TRenderElement} from "../../utils/types/types";
import ChatService from "../../test/services/chatService";

export class Chat extends Block {

    constructor() {
        super("div",["chat-page"]);
        ChatService.getChats()
    }


    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,
            chatSide: new ChatSide(),
            chatContent: new ChatContent(),
        });
    }
}
export default Chat;
