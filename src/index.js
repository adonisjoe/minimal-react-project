import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FormInfo from './components/FormInfo';
import './index.css';
// import '../src/pages/tiktok/tiktok.css';
import '../src/pages/facebook/facebook.css';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
