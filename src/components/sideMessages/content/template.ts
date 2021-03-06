export const template = `
.chat-content__body__chat
    ul.chat-content__body__chat--ul
        each item in messages
            if item.other
                li.chat-content__body__chat--ul--li__other
                    .avatar
                        img(src=imgOutgoing draggable="false")
                    .msg
                        p #{item.other.content}
                        time #{item.other.timeUser}
            if item.self
                li.chat-content__body__chat--ul--li__self
                    .avatar
                        img(src=imgOutgoing draggable="false")
                    .msg
                        p #{item.self.content}
                        time #{item.self.timeUser}
`
