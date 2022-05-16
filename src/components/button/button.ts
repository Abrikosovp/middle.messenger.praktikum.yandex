import {ComponentEvents, TRenderElement} from "../../utils/types/types";
import Block from "../../modules/block";

const template = require('./template.pug');

type BtnType = { text: string, tagClass?: string, type?: string, events?: ComponentEvents }

export class Button extends Block {

    constructor(props: BtnType) {
        // Создаём враппер дом-элемент button
        const cl: string[] = ["container-btn"];
        if (props.tagClass) {
            cl.push("chat-content__btn")
        }
        super("div", cl, {...props, className: "custom-bn"});
    }

    isDisabled(btnDisabled: string) {
        this.setProps({
            ...this.props,
            btnDisabled: btnDisabled ? "custom-bn" : "custom-bn btn-hover",
        });
    }

    render(): TRenderElement {
        return this.compile(template, {...this.props});
    }
}
