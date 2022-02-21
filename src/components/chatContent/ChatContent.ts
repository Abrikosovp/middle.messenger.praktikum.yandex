import Block from "../../utils/Block";
import {TRenderElement} from "../../types/types";
import {template} from "./template";
import Textfield from "../input";
import {InputName, UrlImg} from "../../const/const";
import Button from "../button";
import ChatForm from "./chatForm";


type ChatType = {}

export class ChatContent extends Block {

    constructor(props?: ChatType) {
        super("div", props, ["chat-content"]);
    }

    protected render(): TRenderElement {

        return this.compile(template, {
            ...this.props,
            imgIncoming: UrlImg.incoming,
            imgOutgoing: UrlImg.outgoing,
            formTemplate: new ChatForm({
                content: {
                    message: new Textfield({
                        id: InputName.message,
                        inputName: InputName.message,
                    }),
                    btn: new Button({text: "отпр",})
                }
            })

        });
    }
}
