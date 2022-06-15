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
            padding: 5px;
          }

          .row > div:nth-child(odd) {
            border: 2px solid orange;
            background-color: #777;
          }

          .row > div:nth-child(even) {
            border: 2px solid blueviolet;
            background-color: #AAA;
          }

          .row {
            padding: 50px;
            border: 2px solid red;
          }
        `
    ];

    render() {
        return html`
            <h1>Hello, Main view!</h1>
            <div class="row">
                <div class="col-md-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.,</div>
                <div class="col-md-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                    a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <div class="col-md-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s...
                </div>
                
                <div class="col-md-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.,</div>
                <div class="col-md-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                    a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <div class="col-md-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s...
                </div>
            </div>
        `;
    }
}

customElements.define('main-view', MainView);