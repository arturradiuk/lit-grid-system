import {LitElement, html} from 'lit';

export class MainView extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
            <h1>Hello, Main view!</h1>
        `;
    }
}

customElements.define('main-view', MainView);