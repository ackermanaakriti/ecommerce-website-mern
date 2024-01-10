import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { AuthProvider } from './Global/context/contextauth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>
    </AuthProvider>
  </React.StrictMode>
);


