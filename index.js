import { DOM } from './core/DOM.js';

export class HTMLn {
  constructor() {
  }

  log(logData) {
    console.log('=-=-=-=-=-=-=-=-=');
    console.log(logData);
    console.log('=-=-=-=-=-=-=-=-=');
  }
}

window.htmln = new HTMLn();


window.onload = (() => {
  window.htmln.dom = new DOM();

  const style = ['padding: 0.3rem 1rem;',
    'background: black;',
    'font-family: sans-serif;',
    'text-shadow: 0 2px 10px orange;',
    'font: 2rem/3 Georgia;',
    'border-radius: 17px;',
    'color: white;'].join('');
  
  console.log('%c%s', style, 'HTMLn', 'v0.1.0');
})();

