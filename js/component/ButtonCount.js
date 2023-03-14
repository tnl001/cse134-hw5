class ButtonCount extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        let btn = document.createElement("button");
        let clickCounter = document.createElement("span");

        clickCounter.innerHTML = 0;

        btn.innerHTML = `Times Clicked: `;
        btn.appendChild(clickCounter);
        btn.addEventListener("click", () => {
            clickCounter.innerHTML++;
            console.log(clickCounter.innerHTML);
        })

        this.shadowRoot.appendChild(btn);
    }
}

customElements.define("button-count", ButtonCount);