import Block from "../../modules/block";
import {ComponentEvents, TRenderElement} from "../../utils/types/types";
import UserService from "../../modules/services/UserService";

const template = require('./template.pug');

type AvatarType = {
    url: string;
}

export type AvatarProps = {
    avatarLink?:string;
    id?:string;
    events?: ComponentEvents;
}

export class Avatar extends Block<AvatarProps> {

    constructor(props: AvatarType) {
        super("div", ["container-form__avatar", "mb-2"], {
            ...props,
            id: "file",
            events: {
                change: (event: any) => {
                    event.preventDefault();
                    const formData = new FormData();
                    formData.append('avatar', event.target.files[0]);
                    UserService.updateUserAvatar(formData);
                },
            }
        });
    }

    protected render(): TRenderElement {
        console.log(this.props)
        return this.compile(template, {...this.props,});
    }
}
