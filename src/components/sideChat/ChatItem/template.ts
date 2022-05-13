export const template = `
.user-img.m-5
    img.chat-content__user-image(src=avatar, alt)
.user-data.ml-5
    .user-data__name.pl-5.pb-5.mb-2
        span.chat-content__user-name.mb-2 #{chatId}
        span.chat-content__user-text tetete
    .user-data__date.pb-5.mb-2.mr-10
        span #{title}
`
