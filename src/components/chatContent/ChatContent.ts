import Block from "../../modules/block/Block";
import {TRenderElement} from "../../utils/types/types";
import {template} from "./template";
import Textfield from "../input";
import {InputName, UrlImg} from "../../utils/const/const";
import Form from "../form";

export class ChatContent extends Block {

    constructor() {
        super("div", ["chat-content"]);
    }

    protected render(): TRenderElement {

        return this.compile(template, {
            ...this.props,
            imgIncoming: UrlImg.Incoming,
            imgOutgoing: UrlImg.Outgoing,
            formTemplate: new Form({
                typeForm: "chat",
                content: {
                    [InputName.message]: new Textfield({
                        id: InputName.message,
                        inputName: InputName.message,
                    }),
                }
            }),

        });
    }
}
