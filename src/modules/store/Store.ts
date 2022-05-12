import {EventBus} from "../eventBus/EventBus";
import set from "../../utils/set";
import {MessageResponse, TUserResponse} from "../../utils/types/types";
import {TChatResponse} from "../api/types";
import {ChatUser} from "../../pages/chat/type";

export enum StoreEvents {
    Updated = 'updated',
}

type TActiveChat = {
    chatId: number | null;
    users: ChatUser[];
    token: string;
    messageList: MessageResponse[] | null;
};

export type TStore = {
    errorTextForm: string;
    user: null | TUserResponse;
    chats: TChatResponse[];
    activeChat: TActiveChat | null;
    modal: {
        isShow: boolean;
        type: 'createChat' | 'addUser' | null;
    }
}

// наследуем Store от EventBus, чтобы его методы были сразу доступны у экземпляра Store
class Store {
    static instance: Store;

    private _state!: TStore;

    private _eventBus: EventBus = new EventBus();

    constructor() {
        if (Store.instance) {
            // eslint-disable-next-line no-constructor-return
            return Store.instance;
        }

        this._eventBus.on(StoreEvents.Updated, () => {});
        this._state = getInitialState();
        Store.instance = this;
    }


    getState() {
        return this._state;
    }

    public set(path: string, value: unknown) {
        set(this._state, path, value);

        // метод EventBus
        this._eventBus.emit(StoreEvents.Updated);
    };

    on(event: string, callback: (...args: any) => void): void {
        this._eventBus.on(event, callback);
    }

}

function getInitialState(): TStore {
    return {
        chats: [],
        errorTextForm: '',
        user: null,
        activeChat: null,
        modal: {
            type: null,
            isShow: false,
        },
    };
}

export default new Store();
