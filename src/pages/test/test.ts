import Block from "../../modules/block";
import {TRenderElement} from "../../modules/block/type";
const template = require('./template.pug');

class Test extends Block {

    constructor(props: any) {
        super("div", ["main-content"], props);
    }

    protected render(): TRenderElement {
        return this.compile(template, {...this.props});
    }
}

export default Test;
