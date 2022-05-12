import Block from "../../modules/block/Block";
import {TRenderElement, TUserResponse} from "../../utils/types/types";
import {template} from "./template";
import Textfield from "../../components/input";
import Form from "../../components/form";
import {InputLabel, InputName, InputPlaceholder, UrlImg} from "../../utils/const/const";
import Avatar from "../../components/avatar";
import Navigation from "./navigation";

export class Profile extends Block {

    constructor(props: TUserResponse) {
        super("div", ["form-page"], props);
    }

    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,

            formTemplate: new Form({
                title: '',
                urlMessage: "Уже зарегистрированы ?",
                typeForm: "profile",
                btnText: "Сохранить",
                isBtn: true,
                content: {
                    avatar: new Avatar({
                        url: UrlImg.Incoming,
                    }),
                    [InputName.displayName]: new Textfield({
                        labelName: InputLabel.displayName,
                        id: InputName.displayName,
                        inputName: InputName.displayName,
                        inputValue: this.props.display_name,
                        placeholder: InputPlaceholder.displayName,
                        disabled: true
                    }),
                    [InputName.email]: new Textfield({
                        labelName: InputLabel.email,
                        id: InputName.email,
                        inputName: InputName.email,
                        type: InputName.email,
                        inputValue: this.props.email,
                        placeholder: InputPlaceholder.email,
                        disabled: true
                    }),
                    [InputName.login]: new Textfield({
                        labelName: InputLabel.login,
                        id: InputName.login,
                        inputName: InputName.login,
                        inputValue: this.props.login,
                        placeholder: InputPlaceholder.login,
                        disabled: true
                    }),
                    [InputName.firstName]: new Textfield({
                        labelName: InputLabel.firstName,
                        id: InputName.firstName,
                        inputName: InputName.firstName,
                        inputValue: this.props.first_name,
                        placeholder: InputPlaceholder.firstName,
                        disabled: true
                    }),
                    [InputName.secondName]: new Textfield({
                        labelName: InputLabel.secondName,
                        id: InputName.secondName,
                        inputName: InputName.secondName,
                        inputValue: this.props.second_name,
                        placeholder: InputPlaceholder.secondName,
                        disabled: true
                    }),
                    [InputName.phone]: new Textfield({
                        labelName: InputLabel.phone,
                        id: InputName.phone,
                        inputName: InputName.phone,
                        inputValue: this.props.phone,
                        placeholder: InputPlaceholder.phone,
                        disabled: true
                    }),
                    navigation: new Navigation({...this.props})
                },
            }),
        });
    }
}
