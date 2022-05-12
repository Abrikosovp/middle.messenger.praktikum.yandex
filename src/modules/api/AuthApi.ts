import {BaseApi} from "./baseApi";
import {TUserResponse} from "../../utils/types/types";
import {ENDPOINTS} from "./consts";

class AuthApi extends BaseApi {

    constructor() {
        super(ENDPOINTS.AUTH.PATH);
    }

    request(): Promise<TUserResponse> {
        return this.http.get<TUserResponse>(ENDPOINTS.AUTH.USER);
    }
}

export default new AuthApi();
