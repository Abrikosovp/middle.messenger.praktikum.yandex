
import { template } from "./template";
import {ComponentEvents, TRenderElement} from "../../types/types";
import Block from "../../utils/Block";

type BtnType = { text: string, tagClass?: string, type?: string, events?: ComponentEvents }

export class Button extends Block {

    constructor(props: BtnType) {
        // Создаём враппер дом-элемент button
        super("div", {...props}, ["container-btn", "chat-content__btn"]);
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
