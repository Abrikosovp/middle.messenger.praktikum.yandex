import Block from "../../utils/Block";
import {TRenderElement} from "../../types/types";
import {template} from "./template";
import Textfield from "../input";

type AvatarType = {
    url: string
}

export class Avatar extends Block {

    constructor(props: AvatarType) {
        super("div", ["container-form__avatar", "mb-2"], {
            id: "avatar",
            ...props,
            events: {
                click: () => {
                    const root: HTMLElement = document.querySelector("#file") as HTMLElement;
                    root.click()
                    if (!root) {
                        throw new Error("Root not found")
                    }
                },
            }
        });
    }

    protected render(): TRenderElement {
        console.log("this.props")
        console.log(this.props)
        return this.compile(template, {
            ...this.props,
            file: new Textfield({
                id: "file",
                type: "file",
                hidden: true,
                inputName: "file",
            }),
        });
    }
}
