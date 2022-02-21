import Block from "../../../utils/Block";
import {TRenderElement} from "../../../types/types";
import {template} from "./template";

export class MessageItem extends Block {

    constructor(props?: {text: string}) {
        super("div", props, ["chat-content"]);
    }

    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,
        });
    }

}
