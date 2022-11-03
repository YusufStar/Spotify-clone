import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { Provider } from 'react-redux';
import stores from 'stores';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={stores}>
      <App />
    </Provider>
  </React.StrictMode>
);