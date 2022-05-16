import {getTime} from "../../../utils/getTime/gtrTime";
import {connect} from "../../../modules/connect/connect";
import {ChatList} from "./ChatList";

export default connect(ChatList, ({chats}) => ({
    id: "chatsID",
    chats: !chats.length ? [] :
        chats
            .map((
                {
                    id,
                    title,
                    last_message,
                    unread_count,
                }) => {

                let avatar = last_message?.user?.avatar;

                if (avatar) {
                    avatar = `https://ya-praktikum.tech/api/v2/resources${avatar}`;
                } else {
                    avatar = "";
                }

                return {
                        chatId: id,
                        title,
                        name: last_message?.user?.first_name ? last_message.user.first_name : "",
                        avatar,
                        time: last_message?.time ? getTime(last_message.time) : '',
                        last_message: last_message?.content ? last_message.content.length > 20 ? last_message?.content.slice(0, 20) + "..." : last_message?.content : '',
                        unread_count: unread_count ? `${unread_count}` : '',
                    }
            }),
}));
