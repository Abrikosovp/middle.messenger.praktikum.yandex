import Block from "../../modules/block";
import {TRenderElement} from "../../utils/types/types";
const template = require('./template.pug');
import {RouterLinks, UrlImg} from "../../utils/const/const";
import Link from "../link";
import ChatList from "./ChatList";


export class ChatSide extends Block {

    constructor(props: any = {}) {
        super("div", ["chat-side"], {
            ...props,
            imgIncoming: UrlImg.Incoming,
            imgOutgoing: UrlImg.Outgoing,
            chatList: new ChatList({}),
            createUserLink: new Link({
                label: "создать чат",
                path: RouterLinks.CREATE_USER,
                id: "createUserLink",
                className: "link-color"
            }),
            profileLink: new Link({
                label: "профиль",
                path: RouterLinks.PROFILE,
                id: "patchProfile",
                className: "link-color"
            })
        });
    }

    protected render(): TRenderElement {
        return this.compile(template, this.props);
    }

}
