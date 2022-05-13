import {expect} from 'chai';
import { JSDOM } from "jsdom";
import Block from "../block";
import renderPage from "../../utils/renderPage";
import {TRenderElement} from "./type";
import {template} from "./template";

interface TestBlockProps {
    value: string;
    id: string
}

describe("Block component", () => {
    const defaultProps = { id: "test", value: "default-value" };

    beforeEach(() => {
        const dom = new JSDOM(
            "<!DOCTYPE html><head><title>JSDOM</title></head><body><div id=\"app\"></div></body>",
            {
                url: "http://localhost:3000",
            },
        );
        (global as any).window = dom.window;
        (global as any).document = dom.window.document;
        (global as any).window.scrollTo = () => {};
    });

    const createBlock = (options: TestBlockProps = defaultProps) => {
        class Test extends Block {

            constructor(props: any) {
                super("div", ["main-content"], props);
            }
            //
            protected render(): TRenderElement {
                return this.compile(template, {...this.props});
            }
        }

        const testBlockObj = new Test(options);

        renderPage("#app", testBlockObj);

        return testBlockObj;
    };

    describe("change props", () => {
        it("render function should render current props", () => {
            const testBlock = createBlock();
            expect(document.getElementsByClassName("test")[0].innerHTML)
                .to.contains("default-value");

            testBlock.setProps({ value: "new-value" });

            expect(document.getElementsByClassName("test")[0].innerHTML)
                .to.contains("new-value");
        });
    });
});
