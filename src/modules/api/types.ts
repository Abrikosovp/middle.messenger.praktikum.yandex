import {TUserResponse} from "../../utils/types/types";

type TPassword = {
    password: string;
}


export type LoginRequestData = Pick<TUserResponse, 'login'> & TPassword;

export type ChangeUserRequest = Pick<TUserResponse, 'display_name' | 'first_name' | 'second_name' | 'phone' | 'email' | 'login'>;

export type ChangePasswordRequest = {
    oldPassword: string;
    newPassword: string;
}

type TUserLastMessage = Pick<TUserResponse, 'first_name' | 'second_name' | 'avatar' | 'email' |
    'login' | 'phone'>


export type TChatResponse = {
    id: number;
    title: string;
    avatar: string;
    unread_count: number;
    last_message: {
        user: TUserLastMessage;
        time: string;
        content: string;
    }
};
