import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './Context/UserContext'
import { CartProvider } from './Context/CartContext'
import {ToastContainer} from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <BrowserRouter >
          <App />
        </BrowserRouter>
        <ToastContainer />
      </CartProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals