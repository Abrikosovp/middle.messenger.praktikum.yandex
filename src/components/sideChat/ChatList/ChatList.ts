import Block from "../../../modules/block";
import {TRenderElement} from "../../../utils/types/types";
const template = require('./template.pug');
import Router from "../../../modules/Router";
import {RouterLinks} from "../../../utils/const/const";
import {getUrlParam} from "../../../utils/urlParam/getUrlParam";



export class ChatList extends Block {

    constructor(props: any) {
        super("div", ["chat-list"], {
            ...props,
            events: {
                click: (event: MouseEvent) => this.onClick(event),
            },
        });
    }

    onClick(event: MouseEvent) {
        event.preventDefault()
        event.stopPropagation()
        const element: EventTarget | null = event.srcElement;
        const id: any = (element as HTMLElement)?.id;
        if (id !== getUrlParam()) {

            Router.go(`${RouterLinks.CHATS}?chatId=${id}`);
            Router.start();
        }
    }


    protected render(): TRenderElement {
        return this.compile(template, {
            ...this.props,
        });
    }

}
