import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/Store';

import { ProductContext, ProductProvider } from './Components/Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
      <ProductProvider>
 
    <Router>
    <App />
    </Router>
    </ProductProvider>
  
  </React.StrictMode>
);


