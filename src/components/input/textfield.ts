import {ComponentEvents, TRenderElement} from "../../types/types";
import validation from "../../utils/validation";
import Block from "../../utils/Block";
import { template } from "./template";

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
        super("div", {
            ...props,
            events: {
                // focusin: () => this.onFocus(),
                focusout:(e:FocusEvent) => this.handleChange(e),
                change: (e:FocusEvent) => this.handleChange(e)
            }
        }, ['custom-textfield']);
    }


    onFocus(): void {
        this.setProps({
            ...this.props,
            isValid: true,
            errorText: '',
        });
        this.getContent().querySelector(`input`)?.focus();
    }

    handleChange(e:FocusEvent): void {
        e.preventDefault()
        const {name, value, files} = (e.target as HTMLInputElement);
        if (files) {
            this.updateForm(files[0], false, "");
        } else {
            this.onFocusValid(value, name)
        }
    }

    public onFocusValid = (value: string = "", name: string = "") => {
        console.log(name)
        console.log(value)
        // @ts-ignore
        const {isValid, errorText} = validation[name](value);
        this.updateForm(value, isValid, errorText);
    }

    updateForm(value: FormDataEntryValue | null, isValid: boolean, errorText: string) {
        this.setProps({
            ...this.props,
            isValid,
            errorText,
            inputValue: `${value}`,
        });
    }

    render(): TRenderElement {
        return this.compile(template, {...this.props, className: "custom-textfield__input"});
    }
}
