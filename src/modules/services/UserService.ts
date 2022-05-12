import {setUser} from "../store/actions";
import Router from "../Router";
import {RouterLinks} from "../../utils/const/const";
import {ChangePasswordRequest, ChangeUserRequest} from "../api/types";
import ChangeUserApi from "../api/ChangeUserApi";
import ChangePasswordApi from "../api/ChangePasswordApi";
import ChangeUserAvatarApi from "../api/ChangeUserAvatarApi";

class UserService {

    public async updateUser(data: ChangeUserRequest): Promise<void> {
        const response = await ChangeUserApi.request(data);
        setUser(response);
        Router.go(RouterLinks.PROFILE);
    }

    public async updatePassword(payload: ChangePasswordRequest): Promise<void> {
        try {
            await ChangePasswordApi.request(payload);
            Router.go(RouterLinks.PROFILE);
        } catch (e) {

        }
    }

    public async updateUserAvatar(payload: FormData): Promise<void> {
        try {
            const response = await ChangeUserAvatarApi.request(payload);
            setUser(response);
        } catch (e) {
        }
    }

}

export default new UserService();
