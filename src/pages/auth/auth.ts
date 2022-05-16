import Block from "../../modules/block";
import {TRenderElement} from "../../utils/types/types";
import Form from "../../components/form";
import AuthService from "../../modules/services/authService"
import {LoginRequestData} from "../../modules/api/types";
import {InputLabel, InputName, InputPlaceholder, RouterLinks, RouterLinksName} from "../../utils/const/const";
import Textfield from "../../components/input";
import Link from "../../components/link";

const template = require('./template.pug');

class Auth extends Block {

    constructor() {
        super("div", ["form-page"]);
    }

    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,
            formTemplate: new Form({
                title: 'Авторизация',
                urlMessage: "Не зарегистрированы ?",
                typeForm: "auth",
                handlerSubmit: (values: any) => {
                    AuthService.login(values as LoginRequestData);
                },
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
                    [InputName.link]: new Link({
                        path: `${RouterLinks.REGISTRATION}`,
                        label: RouterLinksName.NOT_REGISTRATION,
                    }),
                },
            }),
        });
    }
}

export default Auth;
