import { css } from 'lit';

const homepageCss = css`
    :host {
      width: 100%;
      height: 100vh;
      display: grid;
      grid-template-areas:
        "header header header"
        ".       .      . "
        ".      main   main";

      grid-template-rows: auto 1fr 1fr;
    }

    current-time {
      grid-area: header;
      text-align: center;
      background-color: green;
      color: white;
      padding: 1rem;
    }

    countdown-timer {
      grid-area: main;
    }
  `;

  export { homepageCss }