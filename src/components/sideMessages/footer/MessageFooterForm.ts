import {template} from "./template";
import Block from "../../../modules/block/Block";
import {TRenderElement} from "../../../utils/types/types";
import Form from "../../form";
import Textfield from "../../input";
import {InputName} from "../../../utils/const/const";

import ChatService from "../../../modules/services/chatService";

export class MessageFooterForm extends Block {

    constructor(props: any) {
        super("div", ["chat-content__action"], {
            ...props,
            formTemplate: new Form({
                typeForm: "chat",
                btnText: "отпр",
                handlerSubmit: (values) => {
                    ChatService.sendMessageSocket(values[InputName.message] as string);
                    const component = this.getContent();
                    const formElement = component.querySelector(`#${InputName.message}`) as HTMLFormElement;
                    formElement.value = "";
                },
                content: {
                    [InputName.message]: new Textfield({
                        id: InputName.message,
                        inputName: InputName.message,
                    }),
                }
            }),

        });
    }

    protected render(): TRenderElement {

        return this.compile(template, this.props);
    }
}
