import ReactDOM from 'react-dom';
import React from 'react';
import  App from './App'

class WebComponent extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('span');
        ReactDOM.render(<App/>, mountPoint);
      }
}

customElements.define('sidebar', WebComponent);