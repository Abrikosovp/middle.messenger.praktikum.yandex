import {render} from "pug";
import {TRenderElement} from "../../utils/types/types";
import {EventBus} from "../eventBus/EventBus";
import {nanoid} from 'nanoid';

interface BlockMeta<P = any> {
    tagName: string;
    tagClass?: string[];
    props: P;
}

type Events =
    typeof Block.EVENTS.INIT
    | typeof Block.EVENTS.FLOW_CDM
    | typeof Block.EVENTS.FLOW_CDU
    | typeof Block.EVENTS.FLOW_RENDER

export default class Block<P = any> {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    } as const;

    private readonly _meta: BlockMeta;
    protected _element: HTMLElement | null = null;
    eventBus: () => EventBus<Events>
    protected readonly props: P;
    // @ts-ignore
    protected id: string = nanoid(6);

    /** JSDoc
     * @param {string} tagName
     * @param tagClass
     * @param {Object} props styles for this tag.
     *
     * @returns {void}
     */
    constructor(tagName: string = "div", tagClass?: string[], props?: P) {
        const eventBus = new EventBus<Events>();
        this._meta = {
            tagName,
            tagClass,
            props
        };

        this.props = this._makePropsProxy(props || {} as P);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus: EventBus<Events>) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources() {
        const {tagName, tagClass = []} = this._meta;
        this._element = this._createDocumentElement(tagName);
        if (tagClass.length > 0) {
            tagClass.forEach(cl => {
                // @ts-ignore
                this._element.classList.add(cl);
            })

        }
    }

    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM, this.props);
    }

    _componentDidMount(props: P) {
        this.componentDidMount(props);
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }


   // @ts-ignore
    componentDidMount(props: P) {

    }

    _componentDidUpdate(oldProps: P, newProps: P) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this._render();
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    componentDidUpdate(oldProps: P, newProps: P) {
        return true;
    }

    setProps = (nextProps: P) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element(): HTMLElement {
        return this._element as HTMLElement;
    }

    /**
     *
     * @param template принимает контекст, возвращает строку
     * @param props контекст
     */
    compile(template: string, props: P): DocumentFragment {

        const fragment = document.createElement('template');
        const components: Record<string, Block> = {};

        /**
         * заменить все компоненты на заглушки
         */
        Object.entries(props).forEach(([name, value]) => {
            if (value instanceof Block) {
                components[value.id] = value;

                // @ts-ignore
                props[name] = `div id="id-${value.id}"`; //заменить все компоненты на заглушки
            }
        });

        //рендарим шаблон
        fragment.innerHTML = render(template, {doctype: 'html', ...props}); //передали сюда


        Object.entries(components).forEach(([id, component]) => {

            const stub = fragment.content.querySelector(`#id-${id}`);

            if (!stub) {
                return;
            }
            stub.replaceWith(component.getContent());
        });

        return fragment.content;
    }

    _render() {
        const fragment = this.render();
        this._removeEvents();
        // Этот небезопасный метод для упрощения логики
        // Используйте шаблонизатор из npm или напиши свой безопасный
        // Нужно не в строку компилировать (или делать это правильно),
        // либо сразу в DOM-элементы превращать из возвращать из compile DOM-ноду
        // @ts-ignore
        this._element.innerHTML = ''; // удаляем предыдущее содержимое

        // @ts-ignore
        this._element.appendChild(fragment);

        this._addEvents()
    }

    protected render(): TRenderElement {
        return this._element as TRenderElement;
    }

    getContent(): HTMLElement {
        return this.element;
    }

    _makePropsProxy(props: P): P {
        // Можно и так передать this
        // Такой способ больше не применяется с приходом ES6+
        const self = this;

        return new Proxy(props as unknown as object, {
            get(target: Record<string, unknown>, prop: string) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target: Record<string, unknown>, prop: string, value: unknown) {
                target[prop] = value;
                // Запускаем обновление компоненты
                // Плохой cloneDeep, в след итерации нужно заставлять добавлять cloneDeep им самим
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            }
        }) as unknown as P;
    }

    _addEvents() {
        const events: Record<string, () => void> = (this.props as any).events;

        if (!events) {
            return;
        }

        Object.entries(events).forEach(([event, listener]) => {
            if (event !== "submit") {
                // @ts-ignore
                const id = `#${this.props.id}`;
                const currentEl = this._element!.querySelector(id);
                currentEl?.addEventListener(event, listener);
            } else {
                this._element!.addEventListener(event, listener);
            }
        })
    }

    _removeEvents() {
        const events: Record<string, () => void> = (this.props as any).events;
        if (!events) {
            return;
        }

        Object.entries(events).forEach(([event, listener]) => {
            this._element!.removeEventListener(event, listener)
        })
    }

    _createDocumentElement(tagName: string) {
        // Можно сделать метод, который через фрагменты в цикле создает сразу несколько блоков
        return document.createElement(tagName);
    }

    show() {
        this.getContent()!.style.display = "block";
    }

    hide() {
        this.getContent()!.style.display = "none";
    }
}
