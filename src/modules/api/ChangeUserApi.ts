import {ENDPOINTS} from "./consts";
import {ChangeUserRequest} from "./types";
import {TUserResponse} from "../../utils/types/types";
import {BaseApi} from "./baseApi";

class ChangeUserApi extends BaseApi {
    constructor() {
        super(ENDPOINTS.USER.PATH);
    }
    public request(data: ChangeUserRequest): Promise<TUserResponse> {
        return this.http.put<TUserResponse>(ENDPOINTS.USER.PROFILE, {data});
    }
}


export default new ChangeUserApi();
