import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Custom hook import kiya jisse theme ka data milta hai
import { useTheme } from './context/ThemeContext'

function App() {

   //! theme (light/dark) aur toggleTheme() function ko access kiya
   const { theme, toggleTheme } = useTheme();


  return (
    <>
      <div
      style={{
        // theme ke hisaab se background aur text color change hoga
        backgroundColor: theme === "dark" ? "#222" : "#eee",
        color: theme === "dark" ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <h1>React 19 Theme Context</h1>
      <p>
        Current Theme: <strong>{theme}</strong>
      </p>

      {/* Button click karne par theme change hogi */}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
     
     
    </>
  )
}

export default App
