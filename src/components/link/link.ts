import {template} from "./template";
import {ComponentEvents, TRenderElement} from "../../utils/types/types";
import Block from "../../modules/Block/Block";
import Router from "../../modules/Router";

type BtnType = { path: string, id?: string, label?: string, className?: string, events?: ComponentEvents }

export class Link extends Block {

    constructor(props: BtnType) {

        super("div", ["pl-5"], {
            className: ["container-form__footer-link"],
            events: {
                click: (event: MouseEvent) => this.onClick(event),
            },
            ...props,
        });
    }

    onClick(event: MouseEvent): void {
        event.preventDefault();
        Router.go(this.props.path);
    }

    render(): TRenderElement {
        return this.compile(template, this.props);
    }
}
