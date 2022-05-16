import Block from "../../../modules/block";
import {TRenderElement} from "../../../utils/types/types";

const template = require('./template.pug');

type TEMessageProps = {
    errorText?: string;
    isValid: boolean;
};


export class ErrorMessage extends Block {

    constructor(props: TEMessageProps) {
        super("tag", ['error-message'], props);
    }


    render(): TRenderElement {
        return this.compile(template, {...this.props});
    }
}
