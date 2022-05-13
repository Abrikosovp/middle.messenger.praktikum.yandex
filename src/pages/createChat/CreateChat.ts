import Block from "../../modules/block";
import {TRenderElement} from "../../utils/types/types";
import {connect} from "../../modules/connect/connect";
import Form from "../../components/form";
import {template} from "../auth/template";
import ChatService from "../../modules/services/chatService";
import {InputName, InputPlaceholder, RouterLinks, RouterLinksName} from "../../utils/const/const";
import Textfield from "../../components/input";
import Link from "../../components/link";
import {CreateChatRequest} from "../chat/type";

export class CreateChat extends Block {

    constructor() {
        super("div", ["form-page"]);
    }

    protected render(): TRenderElement {
        const F = connect(Form, ({errorTextForm}) => ({errorTextForm}))
        return this.compile(template, {
            ...this.props,

            formTemplate: new F({
                title: 'Создание чата',
                urlMessage: "Не зарегистрированы ?",
                typeForm: "createChat",
                btnText: "СОЗДАТЬ ЧАТ",
                handlerSubmit: (values: any) => {
                    ChatService.createChat(values as CreateChatRequest);
                },
                content: {
                    [InputName.title]: new Textfield({
                        labelName: 'Добавить чат',
                        id: InputName.title,
                        inputName: InputName.title,
                        placeholder: InputPlaceholder.chatName,
                    }),
                    [InputName.link]: new Link({
                        path: `${RouterLinks.CHATS}`,
                        id: "patchCreateChat",
                        label: RouterLinksName.BACK_CHATS,
                    }),
                },
            }),
        });
    }
}
