import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import { ShopProvider } from './components/pages/Shop/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopProvider>
    <App id='smart-watch' />
  </ShopProvider>
);

