export const template = `
.chat-side__header
  img(src=imgOutgoing, alt).chat-content__user-image
.chat-side__users
ul.chat-side__users__list
    each item in [{name: "Иван", avatar: imgOutgoing, date: "11:25", lastMessage: "Привет как дела ?"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}, {name: "Иван", avatar: imgIncoming, date: "11:25", lastMessage: "Привет как дела ? что делаешь"}]
           li.chat-side__users__list__item.p-10
            .user-img.m-5
                img.chat-content__user-image(src=item.avatar, alt)
            .user-data.ml-5
                .user-data__name.pl-5.pb-5.mb-2
                    span.chat-content__user-name.mb-2 #{item.name}
                    span.chat-content__user-text tetete
                .user-data__date.pb-5.mb-2.mr-10
                    span #{item.date}
`
