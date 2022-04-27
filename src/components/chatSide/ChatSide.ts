import Block from "../../modules/block/Block";
import {TRenderElement} from "../../types/types";
import {template} from "./template";
import {UrlImg} from "../../utils/const/const";


export class ChatSide extends Block {

    constructor() {
        super("div", ["chat-side"]);
    }

    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,
            imgIncoming: UrlImg.Incoming,
            imgOutgoing: UrlImg.Outgoing,
        });
    }

}
