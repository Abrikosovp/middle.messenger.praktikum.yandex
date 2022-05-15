import Block from "../../modules/block";
import {TRenderElement} from "../../utils/types/types";
const template = require('./template.pug');
import MessageHeader from "./header";
import MessageContent from "./content";
import MessageFooterForm from "./footer";

export class SideMessages extends Block {

    constructor(props: any = {}) {
        super("div", ["chat-content"], {
            ...props,
            header: new MessageHeader({}),
            content: new MessageContent({}),
            footer: new MessageFooterForm({})
        });
    }

    protected render(): TRenderElement {

        return this.compile(template, this.props);
    }
}
