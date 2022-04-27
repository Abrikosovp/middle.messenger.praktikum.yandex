import Block from "../../modules/block/Block";
import {TRenderElement} from "../../utils/types/types";
import {template} from "./template";

export class Error extends Block {

    constructor() {
        super("div", ["error-page"]);
    }

    protected render(): TRenderElement {
        return this.compile(template, {...this.props});
    }
}
