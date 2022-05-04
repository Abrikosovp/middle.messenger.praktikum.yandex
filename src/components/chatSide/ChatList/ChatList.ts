import Block from "../../../modules/block/Block";
import {TRenderElement} from "../../../utils/types/types";
import {template} from "./template";
import {ChatsListProps} from "./types";


export class ChatList extends Block {
    constructor(props: ChatsListProps) {
        super("div", ["chat-list"], props);
    }

    protected render(): TRenderElement {
        console.log(this.compile(template, {
            ...this.props,
        }))
        return this.compile(template, {
            ...this.props,
        });
    }

}

export default ChatList;
