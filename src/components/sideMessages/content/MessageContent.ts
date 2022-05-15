const template = require('./template.pug');
import Block from "../../../modules/block";
import {TRenderElement} from "../../../utils/types/types";
import {UrlImg} from "../../../utils/const/const";

export class MessageContent extends Block {

    constructor(props: any) {
        super("div", ["chat-content__body"], {
            ...props,
            imgIncoming: UrlImg.Incoming,
            imgOutgoing: UrlImg.Outgoing,
        });
    }

    protected render(): TRenderElement {
        return this.compile(template, this.props);
    }
}
