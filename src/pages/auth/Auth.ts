import Block from "../../modules/block";
import {TRenderElement} from "../../utils/types/types";
import {template} from "./template";
import Textfield from "../../components/input";
import Form from "../../components/form";
import {InputLabel, InputName, InputPlaceholder, RouterLinks, RouterLinksName} from "../../utils/const/const";
import Link from "../../components/link";
import {connect} from "../../modules/connect/connect";
import AuthService from "../../modules/services/authService"
import {LoginRequestData} from "../../modules/api/types";

export class Auth extends Block {

    constructor() {
        super("div", ["form-page"]);
    }

    protected render(): TRenderElement {
        const F = connect(Form, ({errorTextForm}) => ({errorTextForm}))
        return this.compile(template, {
            ...this.props,

            formTemplate: new F({
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
