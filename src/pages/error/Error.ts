import Block from "../../modules/block";
import {TRenderElement} from "../../utils/types/types";
const template = require('./template.pug');

export class Error extends Block {

    constructor() {
        super("div", ["error-page"]);
    }

    protected render(): TRenderElement {
        return this.compile(template, {...this.props});
    }
}
