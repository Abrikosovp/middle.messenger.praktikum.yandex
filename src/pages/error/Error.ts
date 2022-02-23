import Block from "../../utils/Block";
import {TRenderElement} from "../../types/types";
import {template} from "./template";

export class Error extends Block {

    constructor() {
        super("div", ["error-page"]);
    }

    protected render(): TRenderElement {
        return this.compile(template, {...this.props});
    }
}
