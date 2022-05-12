import {BaseApi} from "./baseApi";
import {SuccessResponse} from "../../utils/types/types";
import {ENDPOINTS} from "./consts";


class LogoutApi extends BaseApi {

    constructor() {
        super(ENDPOINTS.AUTH.PATH);
    }

    request(): Promise<SuccessResponse> {
        return this.http.post<SuccessResponse>(ENDPOINTS.AUTH.LOGOUT);
    }
}

export default new LogoutApi();
