import Block from "../../utils/Block";
import {TRenderElement} from "../../types/types";
import {template} from "./template";
import Textfield from "../../components/input";
import Form from "../../components/form";
import {InputLabel, InputName, InputPlaceholder, UrlPage} from "../../const/const";
import renderPage from "../../utils/renderPage";


export class Registration extends Block {

    constructor() {
        super("div",  ["form-page"]);
    }

    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,

            formTemplate: new Form({
                title: 'Регистрация',
                urlPage: UrlPage.Login,
                urlMessage: "Уже зарегистрированы ?",
                typeForm: "registration",
                content: {
                    [InputName.firstName]: new Textfield({
                        labelName: InputLabel.firstName,
                        id: InputName.firstName,
                        inputName: InputName.firstName,
                        placeholder: InputPlaceholder.firstName,
                    }),
                    [InputName.secondName]: new Textfield({
                        labelName: InputLabel.secondName,
                        id: InputName.secondName,
                        inputName: InputName.secondName,
                        placeholder: InputPlaceholder.secondName,
                    }),
                    [InputName.login]: new Textfield({
                        labelName: InputLabel.login,
                        id: InputName.login,
                        inputName: InputName.login,
                        placeholder: InputPlaceholder.login,
                    }),

                    [InputName.email]: new Textfield({
                        labelName: InputLabel.email,
                        id: InputName.email,
                        inputName: InputName.email,
                        type: "email",
                        placeholder: InputPlaceholder.email,
                    }),
                    [InputName.password]: new Textfield({
                        labelName: InputLabel.password,
                        id: InputName.password,
                        inputName: InputName.password,
                        type: "password",
                        placeholder: InputPlaceholder.password,
                    }),
                    [InputName.phone]: new Textfield({
                        labelName: InputLabel.phone,
                        id: InputName.phone,
                        inputName: InputName.phone,
                        placeholder: InputPlaceholder.phone,
                    }),
                }
            }),
        });
    }
}
renderPage('.app',  new Registration());
