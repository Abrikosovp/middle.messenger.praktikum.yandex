import Block from "../../../modules/block";
import {TRenderElement, TUserResponse} from "../../../utils/types/types";
const template = require('./template.pug');
import Textfield from "../../../components/input";
import Form from "../../../components/form";
import {InputLabel, InputName, InputPlaceholder, RouterLinks, RouterLinksName} from "../../../utils/const/const";
import Link from "../../../components/link";
import {ChangeUserRequest} from "../../../modules/api/types";
import UserService from "../../../modules/services/UserService";

export class ChangeProfile extends Block {

    constructor(props: TUserResponse) {
        super("div", ["form-page"], props);
    }

    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,

            formTemplate: new Form({
                title: 'Изменить профиль',
                urlMessage: "назад",
                typeForm: "changeProfile",
                btnText: "Сохранить",
                handlerSubmit: (values: ChangeUserRequest) => {
                    UserService.updateUser(values);
                },
                content: {
                    [InputName.displayName]: new Textfield({
                        labelName: InputLabel.displayName,
                        id: InputName.displayName,
                        inputName: InputName.displayName,
                        inputValue: this.props.display_name,
                        placeholder: InputPlaceholder.displayName,
                    }),
                    [InputName.email]: new Textfield({
                        labelName: InputLabel.email,
                        id: InputName.email,
                        inputName: InputName.email,
                        type: InputName.email,
                        inputValue: this.props.email,
                        placeholder: InputPlaceholder.email,
                    }),
                    [InputName.login]: new Textfield({
                        labelName: InputLabel.login,
                        id: InputName.login,
                        inputName: InputName.login,
                        inputValue: this.props.login,
                        placeholder: InputPlaceholder.login,
                    }),
                    [InputName.firstName]: new Textfield({
                        labelName: InputLabel.firstName,
                        id: InputName.firstName,
                        inputName: InputName.firstName,
                        inputValue: this.props.first_name,
                        placeholder: InputPlaceholder.firstName,
                    }),
                    [InputName.secondName]: new Textfield({
                        labelName: InputLabel.secondName,
                        id: InputName.secondName,
                        inputName: InputName.secondName,
                        inputValue: this.props.second_name,
                        placeholder: InputPlaceholder.secondName,
                    }),
                    [InputName.phone]: new Textfield({
                        labelName: InputLabel.phone,
                        id: InputName.phone,
                        inputName: InputName.phone,
                        inputValue: this.props.phone,
                        placeholder: InputPlaceholder.phone,
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
