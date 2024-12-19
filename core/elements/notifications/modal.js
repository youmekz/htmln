class ModalHTMLn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._open = false;
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: relative;
          z-index: 100;
        }

        .modal {
          opacity: 0;
          visibility: hidden;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.9);
          transition: opacity 0.25s ease;
        }

        .modal__bg {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          cursor: pointer;
        }

        .modal__inner {
          transition: top 0.25s ease;
          position: absolute;
          top: -20%;
          right: 0;
          bottom: 0;
          left: 0;
          width: 50%;
          margin: auto;
          overflow: auto;
          background: #fff;
          padding: 1em 2em;
          height: 50%;
          max-height: 80%;
          box-sizing: border-box;
        }

        .modal__close {
          position: absolute;
          right: 1em;
          top: 1em;
          width: 1.1em;
          height: 1.1em;
          cursor: pointer;
        }

        .modal__close:after,
        .modal__close:before {
          content: '';
          position: absolute;
          width: 2px;
          height: 1.5em;
          background: #ccc;
          display: block;
          transform: rotate(45deg);
          left: 50%;
          margin: -3px 0 0 -1px;
          top: 0;
        }

        .modal__close:hover:after,
        .modal__close:hover:before {
          background: #aaa;
        }

        .modal__close:before {
          transform: rotate(-45deg);
        }

        @media screen and (max-width: 768px) {
          .modal__inner {
            width: 90%;
            height: 90%;
            box-sizing: border-box;
          }
        }
      </style>

      <div class="modal">
        <div class="modal__bg"></div>
        <div class="modal__inner">
          <label class="modal__close"></label>
          <slot></slot>
        </div>
      </div>
    `;
  }

  addEventListeners() {
    this.shadowRoot.querySelector('.modal__bg').addEventListener('click', () => this.close());
    this.shadowRoot.querySelector('.modal__close').addEventListener('click', () => this.close());
  }

  open() {
    this._open = true;
    this.update();
    document.body.style.overflow = 'hidden';
  }

  close() {
    this._open = false;
    this.update();
    document.body.style.overflow = '';
  }

  update() {
    const modal = this.shadowRoot.querySelector('.modal');
    if (this._open) {
      modal.style.opacity = '1';
      modal.style.visibility = 'visible';
      this.shadowRoot.querySelector('.modal__inner').style.top = '10%';
    } else {
      modal.style.opacity = '0';
      modal.style.visibility = 'hidden';
      this.shadowRoot.querySelector('.modal__inner').style.top = '-20%';
    }
  }
}

customElements.define('modal-htmln', ModalHTMLn);
