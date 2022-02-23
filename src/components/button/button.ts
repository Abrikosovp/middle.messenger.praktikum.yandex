import {template} from "./template";
import {ComponentEvents, TRenderElement} from "../../types/types";
import Block from "../../utils/Block";

type BtnType = { text: string, tagClass?: string, type?: string, events?: ComponentEvents }

export class Button extends Block {

    constructor(props: BtnType) {
        // Создаём враппер дом-элемент button
        const cl: string[] = ["container-btn"];
        if (props.tagClass) {
            cl.push("chat-content__btn")
        }
        super("div", cl, {...props});
    }

    isDisabled(btnDisabled: string) {
        this.setProps({
            ...this.props,
            btnDisabled,
        });
    }

    render(): TRenderElement {
        return this.compile(template, {...this.props, className: "custom-bn"});
    }
}
