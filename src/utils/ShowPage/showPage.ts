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
    [UrlPage.Main]: new Main(),
    [UrlPage.Login]: new Auth(),
    [UrlPage.Registration]: new Registration(),
    [UrlPage.Profile]: new Profile(),
    [UrlPage.Chats]: new Chat(),
};

const showPage: TFShowPage = (pathname) => {
    const block = pages[pathname];
    renderPage('.app',  block ?? new Error({}));
};


export default showPage;
