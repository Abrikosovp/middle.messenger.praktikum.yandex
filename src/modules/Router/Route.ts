import Block from '../Block/Block';

import {TRouteProps} from './types';
import renderPage from "../../utils/renderPage";
import {TBlockConnect} from "../../utils/types/types";


class Route {
    _pathname: string;
    _blockClass: TBlockConnect;
    _block: Block | null;
    _props;

    constructor(pathname: string, view: TBlockConnect, props: TRouteProps) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string): void {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    match(pathname: string): boolean {
        return pathname === this._pathname;
    }

    leave(): void {
        if (this._block) {
            this._block.hide();
        }
    }

    render(): void {
        if (!this._block) {
            this._block = new this._blockClass();
        }

        renderPage(this._props.rootQuery, this._block);
    }
}

export default Route;
