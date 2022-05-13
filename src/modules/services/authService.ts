import AuthApi from "../api/AuthApi"
import {setErrorTextForm, setUser} from "../store/actions";
import Router from "../Router";
import LogoutApi from "../api/LogoutApi";
import {RouterLinks} from "../../utils/const/const";
import LoginApi from "../api/LoginApi";
import {LoginRequestData} from "../api/types";

class AuthService {

    public async getUser(): Promise<void> {
        try {
            const user = await AuthApi.request();
            setUser(user);
            Router.enterAuth(true).start();
        } catch (e) {

        }
    }

    public async login(payload: LoginRequestData): Promise<void> {
        try {
            await LoginApi.request(payload);
            await this.getUser();
        } catch (e) {
            setErrorTextForm(e.reason);
        }
    }

    public async logout(): Promise<void> {
        try {
            await LogoutApi.request();
            setUser(null);
            Router.enterAuth(false).start();
            Router.go(RouterLinks.LOGIN);
        } catch (e) {
            setErrorTextForm(e.reason);
        }
    }
}

export default new AuthService();
