import Block from "../../modules/block/Block";
import {TRenderElement} from "../../utils/types/types";
import {template} from "./template";
import {RouterLinks, UrlImg} from "../../utils/const/const";
import Link from "../link";
import ChatList from "./ChatList";


export class ChatSide extends Block {

    constructor() {
        super("div", ["chat-side"]);
    }

    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,
            imgIncoming: UrlImg.Incoming,
            imgOutgoing: UrlImg.Outgoing,
            chatList: new ChatList({}),
            profileLink: new Link({label: "профиль", path: RouterLinks.PROFILE, id: "patchProfile", className: "link-color"})
        });
    }

}
