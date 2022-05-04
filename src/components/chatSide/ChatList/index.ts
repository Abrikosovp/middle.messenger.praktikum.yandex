import {connect} from "../../../test/connect/connect";
import ChatList from "./ChatList";
import ChatItem from "../ChatItem";
import {getTime} from "../../../utils/getTime/gtrTime";

export default connect(ChatList, ({chats}) => ({
            chats: !chats.length ? [] :
                chats
                    .map((
                            {
                                id,
                                title,
                                last_message,
                                unread_count,
                            }) => {

                            return new ChatItem(
                                {
                                    chatId: id,
                                    title,
                                    time: last_message?.time ? getTime(last_message.time) : '',
                                    last_message: last_message?.content ?? '',
                                    unread_count: unread_count ? `${unread_count}` : '',
                                },
                            )
                        }
                    ),
        }
    )
);
