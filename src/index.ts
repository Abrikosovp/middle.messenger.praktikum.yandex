import Auth from "./pages/auth";
import Registration from "./pages/registration";
import Chat from "./pages/chat";
import Profile from "./pages/profile";
import Error from "./pages/profile";
import Router from "./modules/Router";
import {RouterLinks} from "./utils/const/const";
import AuthService from "./test/services/authService"
import {getUser} from "./test/store/actions";
import ChangePassword from "./pages/profile/changePassword";
import ChangeProfile from "./pages/profile/changeProfile";


AuthService.getUser().then(() => {
    const isAuth = !!getUser();

    Router
        .enterAuth(isAuth)
        .use(RouterLinks.LOGIN, Auth, 'public')
        .use(RouterLinks.REGISTRATION, Registration, 'public')
        .use(RouterLinks.PROFILE, Profile, 'private')
        .use(RouterLinks.CHANGE_PASSWORD, ChangePassword, 'private')
        .use(RouterLinks.CHANGE_PROFILE, ChangeProfile, 'private')
        .use(RouterLinks.CHATS, Chat, 'private')
        .use(RouterLinks.ERROR_404, Error, 'error')
        .start();
})
