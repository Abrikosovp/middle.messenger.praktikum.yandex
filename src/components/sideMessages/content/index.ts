import {connect} from "../../../test/connect/connect";
import {MessageContent} from "./MessageContent";


export default connect(MessageContent, ({activeChat, user}) => {

    const selfID = user?.id;

    if (!activeChat || !activeChat.messageList || !user) {
        return {
            messages: [],
        };
    }
    return {
        messages: activeChat.messageList
            .map(({content, time, user_id}) => {
                const timeUser = time ? time.replace("T", " ").substring(0, 16) : "";

                let result: {
                    other?: any,
                    self?: any,
                } = {};

                if (user_id === selfID) {
                    result.self = {
                        content,
                        timeUser,
                        user_id
                    }
                } else {
                    result.other = {
                        content,
                        timeUser,
                        user_id
                    }
                }

                return result;
            }),
    };
});
