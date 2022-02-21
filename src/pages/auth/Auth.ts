import Block from "../../utils/Block";
import {TRenderElement} from "../../types/types";
import {template} from "./template";
import Textfield from "../../components/input";
import {Button} from "../../components/button/button";
import Form from "../../components/form";
import {InputLabel, InputName, InputPlaceholder, UrlPage} from "../../const/const";

type AuthType = {}

export class Auth extends Block {

    constructor(props?: AuthType) {
        super("div", props, ["form-page"]);
    }

    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,

            formTemplate: new Form({
                title: 'Авторизация',
                urlPage: UrlPage.registration,
                urlMessage: "Не зарегистрированы ?",
                content: {
                    login: new Textfield({
                        labelName: InputLabel.login,
                        id: InputName.login,
                        inputName: InputName.login,
                        placeholder: InputPlaceholder.login,
                    }),
                    password: new Textfield({
                        labelName: InputLabel.password,
                        id: InputName.password,
                        inputName: InputName.password,
                        type: InputName.password,
                        placeholder: InputPlaceholder.password,
                    }),
                    btn: new Button({
                        text: 'Отправить',
                        type: "submit",
                    }),
                }
            }),
        });
    }
}
