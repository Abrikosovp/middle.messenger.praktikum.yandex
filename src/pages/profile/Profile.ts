import Block from "../../utils/Block";
import {TRenderElement} from "../../types/types";
import {template} from "./template";
import Textfield from "../../components/input";
import {Button} from "../../components/button/button";
import Form from "../../components/form";
import {InputLabel, InputName, InputPlaceholder, UrlImg, UrlPage} from "../../const/const";
import Avatar from "../../components/avatar";

export class Profile extends Block {

    constructor(props?: {}) {
        super("div", props, ["form-page"]);
    }

    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,

            formTemplate: new Form({
                title: 'Профиль',
                urlPage: UrlPage.login,
                urlMessage: "Уже зарегистрированы ?",
                content: {
                    avatar: new Avatar({
                        url: UrlImg.incoming,
                    }),
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
                        type: InputName.email,
                        placeholder: InputPlaceholder.email,
                    }),
                    password: new Textfield({
                        labelName: InputLabel.password,
                        id: InputName.password,
                        inputName: InputName.password,
                        type: InputName.password,
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
