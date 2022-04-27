
import {template} from "./template";
import Block from "../../../modules/block/Block";
import {TRenderElement} from "../../../types/types";

type TEMessageProps = {
    errorText?: string;
    isValid: boolean
};


export class ErrorMessage extends Block {

    constructor(props: TEMessageProps) {
        super("tag", ['error-message'], props);
    }


    render(): TRenderElement {
        return this.compile(template, {...this.props});
    }
}
