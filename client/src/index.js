import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './utils/store';
import App from './App';
import './css/styles.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
