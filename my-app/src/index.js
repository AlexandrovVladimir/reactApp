// index.js - точка входа

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Navigation from './App';
import App from './App';
import './App.css';
//помагает работать со сложными вычислениями
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);


registerServiceWorker();
