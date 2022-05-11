import Block from "../../modules/block/Block";
import {TComponent, TRenderElement} from "../../utils/types/types";
import {template} from "./template";
import {Button} from "../button/button";


type FormProps = {
    title?: string,
    urlMessage?: string,
    content?: TComponent
    btn?: Block
    btnText?: string,
    avatar?: Block
    isBtn?: boolean
    typeForm?: string
    handlerSubmit?: (param: Record<string, string>) => void;
};

type TBtn = {
    type: string,
    text: string,
    tagClass?: string,
}

function serializeForm(formNode: HTMLFormElement): any {
    const inputs = Array.from(formNode.getElementsByTagName('input'));
    const obj: any = {};
    inputs.forEach((i) => {
        obj[i.name] = i.value;
        return null;
    });
    return obj;
}

export class Form extends Block {

    constructor(props?: FormProps) {
        const isChat = props?.typeForm === "chat";
        const tagClass = isChat ? ["chat-content__action__messages-form"] : ["container-form", "elevation", "b-radius"];


        let propsBtn: TBtn = {
            type: "submit",
            text: props?.btnText ? props.btnText : 'Создать',
        }

        if (isChat) {
            propsBtn.tagClass = "chat-content__btn";
        }

        const isBtn = props?.isBtn;

        super("form", tagClass,{
            ...props,
            btn: isBtn ? null : new Button(propsBtn),
            events: {
                submit: (event: Event) => this.onSubmit(event),
            }
        });
    }

    private onSubmit(event: Event): void {
        event.preventDefault();
        const target = (event.target as HTMLFormElement)
        const data = serializeForm(target);
        const valid = this.isValidForm(data);
        if (valid) {
            this.props.handlerSubmit(data)
        }
    }

    private isValidForm(data: any): boolean {
        let result: boolean[] = [];
        const content = this.props.content;
        Object.keys(data).forEach(key => {
            if(key !== 'file') {
                const component = content[key];
                component.onFocusValid(data[key], key)

                result.push(!!content[key].props.errorMessage.props.isValid)
            }
        });

        return result.every(val => val);
    }


    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,
            ...this.props.content,
        });
    }
}
