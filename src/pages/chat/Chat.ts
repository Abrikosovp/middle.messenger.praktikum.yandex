import Block from "../../utils/Block";
import {TRenderElement} from "../../types/types";
import {template} from "./template";
import ChatSide from "../../components/chatSide";
import ChatContent from "../../components/chatContent";

type ChatType = {}

export class Chat extends Block {

    constructor(props?: ChatType) {
        super("div", props, ["chat-page"]);
    }


    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,
            chatSide: new ChatSide(),
            chatContent: new ChatContent(),
        });
    }
}
