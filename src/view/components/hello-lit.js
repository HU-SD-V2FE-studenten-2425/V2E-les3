import { LitElement, html, css } from 'lit';

export class HelloLit extends LitElement {
  static styles = css`
    h1 {
      background-color: yellow;
    }
  `;

  static properties = {
    name: {
      type: String,
      reflect: true
    },
    longitude: {
      type: Number,
    },
    latitude: {
      type: Number,
    },
  };

  constructor() {
    super();
    this.name = 'World';
    this.longitude = -1;
    this.latitude = -1;
  }

  render() {
    this.name = 'Hogeschool Utrecht - ICT';
    console.log(
      `long (${typeof this.longitude}): ${this.longitude}, lat (${typeof this
        .latitude}): ${this.latitude}`
    );
    return html` <h1>Hello ${this.name}</h1> `;
  }
}

customElements.define('hello-lit', HelloLit);
