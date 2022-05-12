import Block from "../../modules/block/Block";
import {InputName} from "../const/const";

export type TRenderElement = HTMLElement | DocumentFragment;
export type ComponentEvents = Partial<Record<keyof GlobalEventHandlersEventMap, (e: Event) => void>>;
export type TComponent = { [key:string]: Block }

export type TValidation = {isValid: boolean, errorText: string | null }
export type TFValidationLength = (min: number, max: number, value: string) => TValidation;
export type TValidate = Record<InputName, TFValidate>;
export type TFValidate = (value: string, compareValue?: string) => TValidation;

export type Indexed<T = unknown> = {
    [key in string]: T;
};
export type BlockProps = {
    events?: ComponentEvents;
} & Indexed<any>;
export type TBlockConnect<T extends BlockProps = BlockProps> = new (...args:any[])=>Block<T>;


export type SuccessResponse = 'ОК';

export type TUserResponse = {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
    avatar: string | null;
}


export type MessageResponse = {
    id: number;
    chat_id: number
    time: string
    type: string
    user_id: number
    content: string
    file?: {
        id: number
        user_id: number
        path: string
        filename: string
        content_type: string
        content_size: number
        upload_date: string
    }
};

export type Token = {
    token: string;
}



