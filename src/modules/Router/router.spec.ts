import {assert} from 'chai';

import Block from "../block";
import {RouterLinks} from "../../utils/const/const";
import {Router} from "./Router";

const router = new Router(`#app`);

class ChatsComponent extends Block {
  constructor() {
    super( 'ChatsComponent');
  }
}

class LoginComponent extends Block {
  constructor() {
    super('LoginComponent');
  }
}

class RegistrationComponent extends Block {
  constructor() {
    super('RegistrationComponent');
  }
}

class ErrorComponent extends Block {
  constructor() {
    super( 'ErrorComponent');
  }
}

describe('Router', () => {
  it('should ', () => {
    assert.exists(router);
  });
  it('Регистрация списка routs', () => {
    router
        .use(RouterLinks.CHATS, ChatsComponent, 'private')
        .use(RouterLinks.LOGIN, LoginComponent, 'public')
        .use(RouterLinks.REGISTRATION, RegistrationComponent, 'public')
        .use(RouterLinks.ERROR_404, ErrorComponent, 'error');
    assert.lengthOf(router.routes, 4);
  });
});
