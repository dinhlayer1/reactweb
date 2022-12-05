import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './WebAnimate/App';
import {BrowserRouter} from 'react-router-dom';
import './WebAnimate/style.css';
import './WebAnimate/responsive.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>

)
