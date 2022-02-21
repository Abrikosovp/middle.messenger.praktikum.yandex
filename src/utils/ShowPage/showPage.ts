import {
    TFShowPage,
} from './types';

import {UrlPage} from "../../const/const";

import Block from '../Block';
import renderPage from '../renderPage';
import Main from "../../pages/main";
import Auth from "../../pages/auth";
import Registration from "../../pages/registration";
import Profile from "../../pages/profile";
import Error from "../../pages/error";
import Chat from "../../pages/chat";

const pages: Record<string, Block<any>> = {
    [UrlPage.main]: new Main(),
    [UrlPage.login]: new Auth(),
    [UrlPage.registration]: new Registration(),
    [UrlPage.profile]: new Profile(),
    [UrlPage.chats]: new Chat({}),
};

const showPage: TFShowPage = (pathname) => {
    console.log(pathname)
    const block = pages[pathname];
    console.log(block)
    renderPage('.app',  block ?? new Error({}));
};


export default showPage;
