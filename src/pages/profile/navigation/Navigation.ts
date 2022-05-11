import Block from "../../../modules/block/Block";
import {TRenderElement} from "../../../utils/types/types";
import {template} from "./template";
import {InputName, RouterLinks, RouterLinksName} from "../../../utils/const/const";
import Link from "../../../components/link";
import AuthService from "../../../test/services/authService"

export class Navigation extends Block {

    constructor(props: any) {
        super("div", [], props);
    }

    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,
            [InputName.link]: new Link({
                id: "patchChats",
                path: RouterLinks.CHATS,
                label: RouterLinksName.BACK_CHATS,
            }),
            changeProfile: new Link({
                id: "patchChangeProfile",
                path: RouterLinks.CHANGE_PROFILE,
                label: RouterLinksName.CHANGE_PROFILE,
            }),
            changePassword: new Link({
                id: "patchChangePassword",
                path: RouterLinks.CHANGE_PASSWORD,
                label: RouterLinksName.CHANGE_PASSWORD,
            }),
            exit: new Link({
                label: RouterLinksName.EXIT,
                path: RouterLinks.LOGIN,
                id: "exit",
                events: {
                    click: (event: MouseEvent) => this.onLogout(event),
                }
            }),
        });
    }

    onLogout(event: Event): void {
        event.preventDefault();
        AuthService.logout();
    }
}

export default Navigation;
