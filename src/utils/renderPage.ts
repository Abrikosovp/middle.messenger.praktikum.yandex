import Block from "../modules/block/Block";

export default function renderPage(query: string, block: Block) {
    const root = document.querySelector(query);
    if (!root) {
        throw new Error("Root not found")
    }


    root!.innerHTML = '';
    root.appendChild(block.getContent());

    block.dispatchComponentDidMount();

    return root;
}
