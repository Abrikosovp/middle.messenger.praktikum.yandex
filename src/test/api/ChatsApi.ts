import {ENDPOINTS} from "./consts";
import {TChatResponse} from "./types";
import {BaseApi} from "./baseApi";

class ChatsApi extends BaseApi {
    constructor() {
        super(ENDPOINTS.CHATS.PATH);
    }
    public request(): Promise<TChatResponse[]> {
        return this.http.get<TChatResponse[]>('');
    }



}

export default new ChatsApi();
