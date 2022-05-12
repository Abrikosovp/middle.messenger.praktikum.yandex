import Block from "../../../modules/block";
import {TRenderElement} from "../../../utils/types/types";
import {template} from "./template";
import {ChatsListProps} from "./types";
import Router from "../../../modules/Router";
import {RouterLinks} from "../../../utils/const/const";
import {getUrlParam} from "../../../utils/urlParam/getUrlParam";



export class ChatList extends Block {

    constructor(props: ChatsListProps) {
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
        const chatsData = this.props.chats.map((ChatItem: any) => {
            return ChatItem.props;
        });

        return this.compile(template, {
            ...this.props,
            chats: chatsData,
        });
    }

}
