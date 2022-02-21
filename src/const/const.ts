// import Block from "../utils/Block";

export enum UrlPage {
    main = '/',
    login = "/login",
    registration = "/registration",
    profile = "/profile",
    chats = "/chats",
}

export enum UrlImg {
    incoming = "https://i.imgur.com/HYcn9xO.png",
    outgoing = "https://i.imgur.com/LJ1TiaG.jpeg"
}


export enum InputName {
    login = "login",
    password = "password",
    firstName = "first_name",
    secondName = "second_name",
    email = "email",
    phone = "phone",
    file = "file",
    message = "message",
}


export enum InputLabel {
    login = "Логин",
    password = "Пароль",
    firstName = "Имя",
    secondName = "Фамилия",
    email = "Почта",
    phone = "Телефон",
    file = "Файл",
}


export enum InputPlaceholder {
    login = "Введите пожалуйста логин",
    password = "Введите пожалуйста пароль",
    firstName = "Введите пожалуйста имя",
    secondName = "Введите пожалуйста фамилия",
    email = "Введите пожалуйста почта",
    phone = "Введите пожалуйста телефон",
}
