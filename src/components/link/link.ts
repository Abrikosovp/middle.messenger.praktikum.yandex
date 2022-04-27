import {template} from "./template";
import {TRenderElement} from "../../utils/types/types";
import Block from "../../modules/Block/Block";
import Router from "../../modules/Router/Router";

type BtnType = { path: string, label?: string}

export class Link extends Block {

    constructor(props: BtnType) {

        super("div", [], {
            ...props,
            events: {
                click: (event: MouseEvent) => this.onClick(event),
            },
        });
    }

    onClick(event: MouseEvent): void {
        event.preventDefault();
        console.log(this.props.path)
        // @ts-ignore
        Router.go(this.props.path);
    }


    render(): TRenderElement {
        return this.compile(template, {...this.props, className: "container-form__footer-link"});
    }
}
