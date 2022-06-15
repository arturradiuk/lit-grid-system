import {LitElement, html, css} from 'lit';
import {getLitGrid} from "../../../src/columns";
import {bootstrapParameters} from "../../../src/grid-parameters";

export class MainView extends LitElement {
    constructor() {
        super();
    }

    static styles = [
        getLitGrid(bootstrapParameters),
        css`
          .row > div {
            margin: 5px;
          }

          .row > div:nth-child(odd) {
            border: 2px solid orange;
          }

          .row > div:nth-child(even) {
            border: 2px solid blueviolet;
          }
        `
    ];

    render() {
        return html`
            <h1>Hello, Main view!</h1>
            <div class="row">
                <div class="col-md-3">Hello,</div>
                <div class="col-md-5">Main</div>
                <div class="col-md-4">view!</div>
            </div>
        `;
    }
}

customElements.define('main-view', MainView);