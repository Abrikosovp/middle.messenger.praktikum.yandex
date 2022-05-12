import {template} from "./template";
import Block from "../../../modules/block/Block";
import {TRenderElement} from "../../../utils/types/types";
import {RouterLinks, UrlImg} from "../../../utils/const/const";
import Link from "../../link";




export class MessageHeader extends Block {

    constructor(props: any) {
        super("div", ["chat-content__header"], {
            ...props,
            imgIncoming: UrlImg.Incoming,
            addUserLink: new Link({
                label: "Добавить пользователя",
                path: RouterLinks.ADD_USER,
                id: "addUserLink",
                className: "link-color"
            }),
        });
    }

    protected render(): TRenderElement {

        return this.compile(template, this.props);
    }
}
