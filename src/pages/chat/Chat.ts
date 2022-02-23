import Block from "../../utils/Block";
import {TRenderElement} from "../../types/types";
import {template} from "./template";
import ChatSide from "../../components/chatSide";
import ChatContent from "../../components/chatContent";

export class Chat extends Block {

    constructor() {
        super("div",["chat-page"]);
    }


    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,
            chatSide: new ChatSide(),
            chatContent: new ChatContent(),
        });
    }
}
