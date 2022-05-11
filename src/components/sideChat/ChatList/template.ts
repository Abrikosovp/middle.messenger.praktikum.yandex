export const template = `
div(id="chatsID")
    each item in chats
        li.chat-side__users__list
            .chat-side__users__list__item.p-10(id=item.chatId) 
                .user-data
                    div.name #{item.title}
                    div.message #{item.last_message}
                    div.date #{item.time}
`
