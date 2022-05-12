import Block from "../../modules/block/Block";
import {TRenderElement} from "../../utils/types/types";
import {connect} from "../../modules/connect/connect";
import Form from "../../components/form";
import {template} from "../auth/template";
import {InputName, InputPlaceholder, RouterLinks, RouterLinksName} from "../../utils/const/const";
import Textfield from "../../components/input";
import Link from "../../components/link";
import {getActiveChat} from "../../modules/store/actions";
import ChatService from "../../modules/services/chatService";

export class AddUser extends Block {

    constructor() {
        super("div", ["form-page"]);
    }

    protected render(): TRenderElement {
        const F = connect(Form, ({errorTextForm}) => ({errorTextForm}))
        return this.compile(template, {
            ...this.props,

            formTemplate: new F({
                title: 'Добавить пользователя',
                urlMessage: "Не зарегистрированы ?",
                typeForm: "addUser",
                btnText: "Добавить пользователя",
                handlerSubmit: (values: any) => {
                    const chat = getActiveChat();
                    if (chat && chat.chatId) {
                        ChatService.addUserToChat({users: [+values.user_id], chatId: chat.chatId});
                    }
                },
                content: {
                    [InputName.userId]: new Textfield({
                        labelName: 'Добавить пользователя',
                        id: InputName.userId,
                        inputName: InputName.userId,
                        placeholder: InputPlaceholder.userId,
                    }),
                    [InputName.link]: new Link({
                        path: `${RouterLinks.CHATS}`,
                        id: "patchAddUser",
                        label: RouterLinksName.BACK_CHATS,
                    }),
                },
            }),
        });
    }
}
