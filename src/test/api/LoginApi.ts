import {BaseApi} from "./baseApi";
import {ENDPOINTS} from "./consts";
import {LoginRequestData} from "./types";

class LoginApi extends BaseApi {

    constructor() {
        super(ENDPOINTS.AUTH.PATH);
    }

    request(data: LoginRequestData): Promise<LoginRequestData> {
        return this.http.post<LoginRequestData>(ENDPOINTS.AUTH.SIGNIN,{data});
    }
}

export default new LoginApi();
