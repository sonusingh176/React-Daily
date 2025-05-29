import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// React, root render, App component aur ThemeProvider import kiya
import { ThemeProvider } from './context/ThemeContext.jsx'


//App ko ThemeProvider ke andar wrap kiya — taki har component context use kar sake
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
