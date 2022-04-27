import Block from "../../modules/block/Block";
import {TRenderElement} from "../../types/types";
import {template} from "./template";


export class Main extends Block {

    constructor() {
        super("div", ["main-content"]);
    }

    protected render(): TRenderElement {
        return this.compile(template, {...this.props});
    }
}
