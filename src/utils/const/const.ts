export enum RouterLinks {
    Main = '/main',
    LOGIN = "/",
    REGISTRATION = "/registration",
    PROFILE = "/profile",
    CHANGE_PASSWORD = "/profile/change-password",
    CHANGE_PROFILE = "/profile/change-profile",
    CHATS = "/chats",
    ERROR_404 = "/ERROR_404",
}

export enum UrlImg {
    Incoming = "https://i.imgur.com/HYcn9xO.png",
    Outgoing = "https://i.imgur.com/LJ1TiaG.jpeg"
}


export enum InputName {
    login = "login",
    password = "password",
    oldPassword = "oldPassword",
    newPassword = "newPassword",
    displayName = "display_name",
    firstName = "first_name",
    secondName = "second_name",
    email = "email",
    phone = "phone",
    message = "message",
    link = "link",
}

export enum RouterLinksName {
    NOT_REGISTRATION = "Не зарегистрированы ?",
    EXIT = "Выйти",
    ALREADY_REGISTRATION = "Уже зарегистрированы ?",
    BACK_CHATS = "К чатам",
    BACK_PROFILE = "Вернуться в профиль",
    CHANGE_PROFILE = "Изменить профиль",
    CHANGE_PASSWORD = "Изменить пароль",
}


export enum InputLabel {
    login = "Логин",
    password = "Пароль",
    firstName = "Имя",
    secondName = "Фамилия",
    email = "Почта",
    phone = "Телефон",
    file = "Файл",
    displayName = "Имя в чате",
}


export enum InputPlaceholder {
    login = "Введите пожалуйста логин",
    password = "Введите пожалуйста пароль",
    passwordNew = "Введите пожалуйста новый пароль",
    passwordOld = "Введите пожалуйста еще раз",
    firstName = "Введите пожалуйста имя",
    secondName = "Введите пожалуйста фамилия",
    email = "Введите пожалуйста почта",
    displayName = "Введите пожалуйста имя в чате",
    phone = "Введите пожалуйста телефон",
}

export type ROUTE_ACCESS = 'public'|'private'|'error';
