import Block from "../../utils/Block";
import {TRenderElement} from "../../types/types";
import {template} from "./template";

type ErrorType = {}

export class Error extends Block {

    constructor(props: ErrorType) {
        super("div", props, ["error-page"]);
    }

    protected render(): TRenderElement {
        return this.compile(template, this.props);
    }
}
