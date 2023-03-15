class ButtonCount extends HTMLElement {
    constructor() {
        super();
        let count = 0;
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `<button >Times Clicked: 0</button>`;
        shadowRoot.addEventListener("click", () => {
            shadowRoot.innerHTML = `<button>Times Clicked: ${++count}</button>`;
            console.log(count); //testing
        });
    }
}
customElements.define("button-count", ButtonCount);