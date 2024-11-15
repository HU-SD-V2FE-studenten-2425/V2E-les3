import { LitElement, html, css } from 'lit';

export class CountdownTimer extends LitElement {
  #INITIAL_COUNTDOWN_VALUE_IN_SECONDS = 10;
  #ONE_SECOND_IN_MILLISECONDS = 1000;
  #ONE_SECOND = 1;
  #END_TIME = 0;

  static properties = {
    countdownValue: { type: Number, reflect: true },
    start: { type: Number },
  };

  constructor() {
    super();
    this.start = this.#INITIAL_COUNTDOWN_VALUE_IN_SECONDS;
    this.countdownValue = this.start;
  }

  connectedCallback() {
    super.connectedCallback();

    this.countdownValue = this.start;
  }

  firstUpdated() {
    const btnElement = this.shadowRoot.querySelector('#btnStart');
    console.log(btnElement);    
  }

  countingDownHandler() {
    this.countdownValue -= this.#ONE_SECOND;

    if (this.countdownValue <= this.#END_TIME) {
      clearInterval(this.intervalID);
    }

    console.log(`Counting Down: ${this.countdownValue}`);
  }

  clickHandler(event) {
    this.intervalID = setInterval(
      this.countingDownHandler.bind(this),
      this.#ONE_SECOND_IN_MILLISECONDS
    );
  }

  render() {
    return html`
      Countdown: ${this.countdownValue}
      <button id="btnStart" @click=${this.clickHandler}>Start</button>
    `;
  }
}

customElements.define('countdown-timer', CountdownTimer);
