import Block from "../../../modules/block";
import {TRenderElement} from "../../../utils/types/types";
import {template} from "./template";

type ChatsItemProps = {
    chatId: number,
    title: string,
    time: string,
    name: string,
    last_message: string,
    unread_count: string,
    avatar: string,

}

export class ChatItem extends Block {
    constructor(props: ChatsItemProps) {
        super("div", ["chat-list"], props);
    }

    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,
        });
    }

}
