import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/query/react';

import { shopApi } from './redux/features/shopapi.jsx';
import { shopApi2 } from './redux/features/Shopapi2.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={shopApi2}>
    <App />
    </ApiProvider>
    
  </React.StrictMode>,
)
