export const template = `
.chat-content__header
      img.chat-content__user-image(src=imgIncoming, alt)
      span.chat-content__user-name Петров
.chat-content__body
    ul.chat
        each item in [5, 6, 7, 8, 9, 10,5, 6, 7, 8, 9, 10]
            li.other
                .avatar
                    img(src=imgIncoming draggable="false")
                .msg
                    p Привет!
                    time 20:17
            li.self
                .avatar
                    img(src=imgOutgoing draggable="false")
                .msg
                    p Привет как настроение ?
                    time 20:18
   
.chat-content__action
   #{formTemplate}
`


//     .avatar
// img(src=imgIncoming draggable="false")
