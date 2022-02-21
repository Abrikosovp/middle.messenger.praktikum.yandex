import Block from "../../utils/Block";
import {TRenderElement} from "../../types/types";
import {template} from "./template";
import {UrlImg} from "../../const/const";

type SideType = {}

export class ChatSide extends Block {

    constructor(props?: SideType) {
        super("div", props, ["chat-side"]);
    }

    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,
            imgIncoming: UrlImg.incoming,
            imgOutgoing: UrlImg.outgoing,
        });
    }

}
