import {BaseApi} from "./baseApi";
import {ENDPOINTS} from "./consts";
import {SuccessResponse, Token} from "../../utils/types/types";
import {ChatUser, UserToChatRequest} from "../../pages/chat/type";


class ChatDataApi extends BaseApi {
    constructor() {
        super(ENDPOINTS.CHATS.PATH);
    }
    public request(chatId: number): Promise<ChatUser[]> {
        return this.http.get<ChatUser[]>(`/${chatId}${ENDPOINTS.CHATS.USERS}`);
    }

    public getToken(chatId: number): Promise<Token> {
        return this.http.post<Token>(`${ENDPOINTS.CHATS.TOKEN}/${chatId}`);
    }

    public update(data:UserToChatRequest): Promise<SuccessResponse> {
        return this.http.put<SuccessResponse>(ENDPOINTS.CHATS.USERS, {data});
    }

    public delete(data:UserToChatRequest):Promise<SuccessResponse> {
        return this.http.delete<SuccessResponse>(ENDPOINTS.CHATS.USERS, {data});
    }
}
export default new ChatDataApi();
