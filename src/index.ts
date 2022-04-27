import Auth from "./pages/auth";
import Registration from "./pages/registration";
import Chat from "./pages/chat";
import Profile from "./pages/profile";
import Router from "./modules/Router/Router";
import {RouterLinks} from "./utils/const/const";

const router = new Router("#app");


router
    .enterAuth(true)
    .use(RouterLinks.LOGIN, Auth)
    .use(RouterLinks.REGISTRATION, Registration)
    .use(RouterLinks.CHATS, Chat)
    .use(RouterLinks.PROFILE, Profile)
    .start();



