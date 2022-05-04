import store, { StoreEvents } from './store/Store';
import {TRenderElement} from "../utils/types/types";
import {template} from "../components/input/errorMessage/template";
import Block from "../modules/block/Block";
import AuthService from "./services/authService"

export class UserProfile extends Block {
    constructor(...args: any) {
        super(...args);

        // запрашиваем данные у контроллера
        AuthService.getUser();

        // подписываемся на событие
        store.on(StoreEvents.Updated, () => {
            // вызываем обновление компонента, передав данные из хранилища
            this.setProps(store.getState());
        });
    }


    render(): TRenderElement {
        return this.compile(template, {...this.props});
    }
}
