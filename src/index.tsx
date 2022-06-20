import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from 'app';
import { store } from 'store/index';
import './styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={ store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
