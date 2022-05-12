import {ENDPOINTS} from "./consts";
import {TChatResponse} from "./types";
import {BaseApi} from "./baseApi";
import {ChatID, CreateChatRequest} from "../../pages/chat/type";
import {SuccessResponse} from "../../utils/types/types";

class ChatsApi extends BaseApi {

    constructor() {
        super(ENDPOINTS.CHATS.PATH);
    }

    public request(): Promise<TChatResponse[]> {
        return this.http.get<TChatResponse[]>('');
    }

    public create(data: CreateChatRequest): Promise<any> {
        return this.http.post('', {data});
    }


    public delete(data:ChatID): Promise<SuccessResponse> {
        return this.http.delete<SuccessResponse>('', {data});
    }

}

export default new ChatsApi();
