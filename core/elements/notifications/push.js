export class PushHTMLn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  render() {
    const width = '30';
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          cursor: pointer;
          width: ${width}vw;
          background: lightgray;
          top: 0;
          left: ${50 - width / 2}vw;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          :host {
            width: 90vw;
            left: 5vw;
          }
        }
      </style>
      <div class="push-content">
        <slot></slot>
      </div>
    `;
  }

  click() {
    this.addEventListener('click', () => {
      this.remove();
    });
  }

  connectedCallback() {
    this.render();
    this.click();
  }
}

customElements.define('push-htmln', PushHTMLn);
