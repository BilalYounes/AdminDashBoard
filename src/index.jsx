import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './Base/utilities.scss'
import './Base/base.scss'
import './Base/button.scss'
import { DarkModeContextProvider } from './DarkModeContex/DarkModeContex';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
    <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

