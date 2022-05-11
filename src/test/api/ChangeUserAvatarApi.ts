import {BaseApi} from "./baseApi";
import {ENDPOINTS} from "./consts";
import {TUserResponse} from "../../utils/types/types";


export class ChangeUserAvatarApi extends BaseApi {
    constructor() {
        super(ENDPOINTS.USER.PATH, true);
    }
    public request(data: FormData): Promise<TUserResponse> {
        return this.http.put<TUserResponse>(ENDPOINTS.USER.AVATAR, {data});
    }

}
export default new ChangeUserAvatarApi();
