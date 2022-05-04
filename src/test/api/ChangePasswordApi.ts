import {ENDPOINTS} from "./consts";
import {BaseApi} from "./baseApi";
import {ChangePasswordRequest} from "./types";
import {SuccessResponse} from "../../utils/types/types";

class ChangePasswordApi extends BaseApi{
    constructor() {
        super(ENDPOINTS.USER.PATH);
    }
    public request(data:ChangePasswordRequest):Promise<SuccessResponse> {
        return this.http.put<SuccessResponse>(ENDPOINTS.USER.PASSWORD, {data});
    }
}

export default new ChangePasswordApi()
