import {ComponentEvents, TRenderElement} from "../../types/types";
import validations from "../../utils/validations";
import Block from "../../modules/block/Block";
import {template} from "./template";
import ErrorMessage from "./errorMessage";

type InputProps = {
    id: string;
    type?: string;
    events?: ComponentEvents;
    isValid?: boolean;
    hidden?: boolean;
    labelName?: string;
    inputName?: string;
    errorText?: string;
    inputValue?: string;
    placeholder?: string;
};


export class Textfield extends Block {

    constructor(props: InputProps) {

        super("div", ['custom-textfield'], {
            ...props,
            className: "custom-textfield__input",
            errorMessage: new ErrorMessage({isValid: true, errorText: ""}),
            events: {
                blur: (e: FocusEvent) => this.handleChange(e),
                focus: (e: FocusEvent) => this.handleChange(e)
            }
        });
    }

    onFocus(): void {
        this.setProps({
            ...this.props,
            isValid: true,
            errorText: '',
        });
        this.getContent().querySelector(`input`)?.focus();
    }

    handleChange(e: FocusEvent): void {
        e.preventDefault()
        const {name, value, files} = (e.target as HTMLInputElement);
        if (files) {
            // this.updateForm(files[0], false, "");
        } else {
            this.onFocusValid(value, name);
        }
    }

    onFocusValid = (value: string = "", name: string = "") => {
        // @ts-ignore
        const {isValid, errorText} = validations[name](value);
        this.props.errorMessage.setProps({
            isValid, errorText
        })
    }

    render(): TRenderElement {
        return this.compile(template, {...this.props});
    }
}
