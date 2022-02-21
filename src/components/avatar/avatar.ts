import Block from "../../utils/Block";
import {TRenderElement} from "../../types/types";
import {template} from "./template";
import Textfield from "../input";
import {InputName} from "../../const/const";

type AvatarType = {}

export class Avatar extends Block {

    constructor(props?: AvatarType) {
        super("div", {
            ...props,
            events: {
                // focusin: () => this.onFocus(),
                click: () => {
                    const root: HTMLElement = document.querySelector("#file") as HTMLElement;
                    root.click()
                    if (!root) {
                        throw new Error("Root not found")
                    }
                },
            }
        }, ["container-form__avatar", "mb-2"]);
    }

    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,
            file: new Textfield({
                id: InputName.file,
                type: InputName.file,
                hidden: true,
                inputName: InputName.file,
            }),
        });
    }
}
