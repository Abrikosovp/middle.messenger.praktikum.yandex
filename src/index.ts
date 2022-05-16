import Auth from "./pages/auth";
import Registration from "./pages/registration";
import Chat from "./pages/chat";
// import Error from "./pages/error";
import Router from "./modules/Router";
import {RouterLinks} from "./utils/const/const";
import AuthService from "./modules/services/authService"
import ChangePassword from "./pages/profile/changePassword";
import ChangeProfile from "./pages/profile/changeProfile";
import CreateChat from "./pages/createChat";
import AddUser from "./pages/addUser";

import './index.scss';
import Profile from "./pages/profile";
import {getUser} from "./modules/store/actions";


AuthService.getUser().then(() => {
    const isAuth = !!getUser();
    console.log(isAuth)
    Router
        .enterAuth(isAuth)
        .use(RouterLinks.LOGIN, Auth, 'public') //1
        .use(RouterLinks.REGISTRATION, Registration, 'public') //2
        .use(RouterLinks.CHATS, Chat, 'private')
        .use(RouterLinks.PROFILE, Profile, 'private') //3
        .use(RouterLinks.CHANGE_PASSWORD, ChangePassword, 'private')
        .use(RouterLinks.CHANGE_PROFILE, ChangeProfile, 'private')
        .use(RouterLinks.CREATE_USER, CreateChat, 'private')
        .use(RouterLinks.ADD_USER, AddUser, 'private')
        // .use(RouterLinks.ERROR_404, Error, 'error')
        .start();
})
