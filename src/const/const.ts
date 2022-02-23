// import Block from "../utils/Block";

export enum UrlPage {
    Main = '/',
    Login = "/login",
    Registration = "/registration",
    Profile = "/profile",
    Chats = "/chats",
}

export enum UrlImg {
    Incoming = "https://i.imgur.com/HYcn9xO.png",
    Outgoing = "https://i.imgur.com/LJ1TiaG.jpeg"
}


export enum InputName {
    login = "login",
    password = "password",
    firstName = "first_name",
    secondName = "second_name",
    email = "email",
    phone = "phone",
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
