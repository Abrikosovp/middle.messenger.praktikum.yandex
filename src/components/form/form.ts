import Block from "../../utils/Block";
import { TComponent, TObjectString, TRenderElement} from "../../types/types";
import {template} from "./template";


type FormProps = {
    title?: string,
    urlPage?: string,
    urlMessage?: string,
    content?: TComponent
};

export class Form extends Block {

    constructor(props?: FormProps) {
        super("form", {
            ...props,
            events: {
                submit: (event: Event) => this.onSubmit(event),
            }
        }, ["container-form", "elevation", "b-radius"]);
    }

    private onSubmit(event: Event): void {
        event.preventDefault();
        const valid = this.isValidForm();

        if (valid) {
            let result: TObjectString = {};
            const content = this.props.content;
            Object.keys(content).forEach(key => {
                if(key !== 'btn') result[key] = content[key].props.inputValue
            })

            console.log(result);
        }
    }

    private isValidForm(): boolean {
        let result: boolean[] = [];
        const content = this.props.content;
        Object.keys(content).forEach(key => {
            if(key !== 'btn' && key !== 'avatar') {
                const component = content[key];
                component.onFocusValid(component.props.inputValue, component.props.id)
                result.push(!!content[key].props.inputValue)
            }

        });

        return result.every(val => val);
    }


    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,
            ...this.props.content
        });
    }
}
