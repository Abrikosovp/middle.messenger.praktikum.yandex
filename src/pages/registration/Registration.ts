import Block from "../../utils/Block";
import {TRenderElement} from "../../types/types";
import {template} from "./template";
import Textfield from "../../components/input";
import {Button} from "../../components/button/button";
import Form from "../../components/form";
import {InputLabel, InputName, InputPlaceholder, UrlPage} from "../../const/const";
import renderPage from "../../utils/renderPage";


export class Registration extends Block {

    constructor(props?: {}) {
        super("div", props, ["form-page"]);
    }

    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,

            formTemplate: new Form({
                title: 'Регистрация',
                urlPage: UrlPage.login,
                urlMessage: "Уже зарегистрированы ?",
                content: {
                    firstName: new Textfield({
                        labelName: InputLabel.firstName,
                        id: InputName.firstName,
                        inputName: InputName.firstName,
                        placeholder: InputPlaceholder.firstName,
                    }),
                    secondName: new Textfield({
                        labelName: InputLabel.secondName,
                        id: InputName.secondName,
                        inputName: InputName.secondName,
                        placeholder: InputPlaceholder.secondName,
                    }),
                    login: new Textfield({
                        labelName: InputLabel.login,
                        id: InputName.login,
                        inputName: InputName.login,
                        placeholder: InputPlaceholder.login,
                    }),

                    email: new Textfield({
                        labelName: InputLabel.email,
                        id: InputName.email,
                        inputName: InputName.email,
                        type: "email",
                        placeholder: InputPlaceholder.email,
                    }),
                    password: new Textfield({
                        labelName: InputLabel.password,
                        id: InputName.password,
                        inputName: InputName.password,
                        type: "password",
                        placeholder: InputPlaceholder.password,
                    }),
                    phone: new Textfield({
                        labelName: InputLabel.phone,
                        id: InputName.phone,
                        inputName: InputName.phone,
                        placeholder: InputPlaceholder.phone,
                    }),
                    btn: new Button({
                        text: 'Создать',
                        type: "submit",
                    }),
                }
            }),
        });
    }
}


renderPage('.app',  new Registration());
