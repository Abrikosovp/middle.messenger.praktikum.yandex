import Route from "./Route";
import {TBlockConnect} from "../../utils/types/types";

class Router {
  history: History;
  routes: Route[];
  isAuth: boolean;
  _currentRoute: null | Route;
  private static __instance: Router;
  private _rootQuery: string;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    this.isAuth = false;

    Router.__instance = this;
  }

  use(pathname: string, block: TBlockConnect) {
    const route = new Route(pathname, block, {rootQuery: this._rootQuery});
    this.routes.push(route);
    return this;
  }

  start(): void  {
    window.onpopstate = (event: PopStateEvent) => {
      this._onRoute((event.currentTarget as typeof window).location.pathname);
    };
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string): void {
    const route = this.getRoute(pathname);
    if (!route) return;

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route.render();
  }

  go(pathname: string): void {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string): Route | undefined {
    return this.routes.find(route => route._pathname === pathname);
  }

  enterAuth(value: boolean) {
    this.isAuth = value;
    return this;
  }


}

export default Router;