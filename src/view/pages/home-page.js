import { LitElement, html, css } from 'lit';
import { homepageCss } from './home-page-css';
import '../components/hello-lit';
import '../components/countdown-timer';
import '../components/current-time';


export class HomePage extends LitElement {

  static styles = [homepageCss];

  render() {
        return html`
        <current-time></current-time>
        <countdown-timer start="5"></countdown-timer>
    `;
  }
}

customElements.define('home-page', HomePage);