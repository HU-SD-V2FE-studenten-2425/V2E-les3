import { LitElement, html } from 'lit';

export class CurrentTime extends LitElement {

  #ONE_SECOND_IN_MILLISEC = 1000;

  static properties = {
    currentTime: { type: Date }
  }

  constructor() {
    super();
    this.currentTime = new Date();

    var time = new Date()
  }

  connectedCallback() {
    super.connectedCallback();
    this.intervalID = setInterval(this.updateTime.bind(this), this.#ONE_SECOND_IN_MILLISEC)
  }

  updateTime() {
    this.currentTime = new Date();
  }

  render() {
    return html`
      ${this.currentTime.toLocaleTimeString('nl-NL')}
    `;
  }

}

customElements.define('current-time', CurrentTime);
