export const template = `
append head-content
    link(href="./chat.scss" rel="stylesheet")
    
.welcome-page
            ul.nav
                li.nav-item
                    a(href="/login").nav-link Логин
                li.nav-item
                    a(href="/registration").nav-link Регистрация
                li.nav-item
                    a(href="/profile").nav-link Профиль
                li.nav-item
                    a(href="/chats").nav-link Чат`
