import Block from "../../utils/Block";
import {TRenderElement} from "../../types/types";
import {template} from "./template";
import Textfield from "../../components/input";
import Form from "../../components/form";
import {InputLabel, InputName, InputPlaceholder, UrlPage} from "../../const/const";
import renderPage from "../../utils/renderPage";

export class Auth extends Block {

    constructor() {
        super("div", ["form-page"]);
    }

    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,

            formTemplate: new Form({
                title: 'Авторизация',
                urlPage: UrlPage.Registration,
                urlMessage: "Не зарегистрированы ?",
                typeForm: "auth",
                content: {
                    [InputName.login]: new Textfield({
                        labelName: InputLabel.login,
                        id: InputName.login,
                        inputName: InputName.login,
                        placeholder: InputPlaceholder.login,
                    }),
                    [InputName.password]: new Textfield({
                        labelName: InputLabel.password,
                        id: InputName.password,
                        inputName: InputName.password,
                        type: InputName.password,
                        placeholder: InputPlaceholder.password,
                    }),
                },
            }),
        });
    }
}
renderPage('.app',  new Auth());
