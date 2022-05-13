import Block from "../../../modules/block";
import {TRenderElement, TUserResponse} from "../../../utils/types/types";
import {template} from "./template";
import Textfield from "../../../components/input";
import Form from "../../../components/form";
import {InputName, InputPlaceholder, RouterLinks, RouterLinksName} from "../../../utils/const/const";
import Link from "../../../components/link";
import UserService from "../../../modules/services/UserService";

export class ChangePassword extends Block {

    constructor(props: TUserResponse) {
        super("div", ["form-page"], props);
    }

    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,

            formTemplate: new Form({
                title: 'Пароль',
                urlMessage: "Уже зарегистрированы ?",
                typeForm: "changePassword",
                btnText: "Сохранить",
                handlerSubmit: (values) => {
                    UserService.updatePassword({oldPassword: values.password, newPassword: values.newPassword})

                },
                content: {
                    [InputName.password]: new Textfield({
                        labelName: "Старый пароль",
                        id: InputName.password,
                        inputName: InputName.password,
                        placeholder: InputPlaceholder.password,
                    }),
                    [InputName.oldPassword]: new Textfield({
                        labelName: "Новый пароль",
                        id: InputName.newPassword,
                        inputName: InputName.newPassword,
                        placeholder: InputPlaceholder.passwordNew,
                    }),
                    [InputName.newPassword]: new Textfield({
                        labelName: "Пароль еще раз",
                        id: InputName.oldPassword,
                        inputName: InputName.oldPassword,
                        placeholder: InputPlaceholder.passwordOld,
                    }),
                    [InputName.link]: new Link({
                        id: "patchBack",
                        path: RouterLinks.PROFILE,
                        label: RouterLinksName.BACK_PROFILE,
                    }),
                },
            }),
        });
    }
}
