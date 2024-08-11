import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import { TransactionTokenProvider } from './context/token';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
     <TransactionTokenProvider>
     <BrowserRouter>
        <App />
        </BrowserRouter>
        </TransactionTokenProvider>
    </AuthProvider>
);

