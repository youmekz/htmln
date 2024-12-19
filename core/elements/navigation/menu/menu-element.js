export class MenuElementHTMLn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host a {
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }

        :host(:hover) a {
          text-decoration: none;
        }

        @media (max-width: 768px) {
          :host {
            display: block;
            margin: 5px 0;
          }
        }
      </style>
      <a><slot></slot></a>
    `;
  }

  static get observedAttributes() {
    return ['href'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'href' && newValue) {
      const anchor = this.shadowRoot.querySelector('a');
      anchor.href = newValue;
    }
  }

  connectedCallback() {
    this.render();
    const href = this.getAttribute('href');
    if (href) {
      const anchor = this.shadowRoot.querySelector('a');
      anchor.href = href;
    }
  }
}

customElements.define('menu-element', MenuElementHTMLn);
