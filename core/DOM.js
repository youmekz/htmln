import './mobile.js';

import './elements/navigation/menu/menu-element.js';
import './elements/notifications/push.js';
import './elements/notifications/modal.js';


export class DOM {
    query(selector, parent=document) {
      return parent.querySelector(selector);
    }

    generateId() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomCode = '';
    
        for(let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          randomCode += characters.charAt(randomIndex);
        }
        
        return randomCode;
    }
}