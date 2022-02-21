import Block from "../../utils/Block";
import {TRenderElement} from "../../types/types";
import {template} from "./template";


type MainType = {}

export class Main extends Block {

    constructor(props?: MainType) {
        super("div", props, ["main-content"]);
    }

    protected render(): TRenderElement {
        return this.compile(template, this.props);
    }

}
