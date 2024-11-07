import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/reset.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer/>
    <App />
  </StrictMode>,
)
