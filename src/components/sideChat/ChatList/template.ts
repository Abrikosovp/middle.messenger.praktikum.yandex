export const template = `
div(id="chatsID")
    each item in chats
        li.chat-side__users__list
            .chat-side__users__list__item
                .user-data(id=item.chatId) 
                    div.name(id=item.chatId) #{item.title}
                    div.message(id=item.chatId) #{item.last_message}
                    div.date(id=item.chatId) #{item.time}
`
