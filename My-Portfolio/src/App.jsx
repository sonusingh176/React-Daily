import { useContext, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home';
import About from './pages/about/about';
import Works from './pages/works/works';
import SKills from './pages/skills/skills';
import Contact from './pages/contact/contact';
import Resume from './pages/resume/resume';
import { ThemeContext } from './context/ThemeContext'





function App() {

  const {theme} =useContext(ThemeContext);

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/works' element={<Works />} />
        <Route path='/skills' element={<SKills />} />
        <Route path='/contact' element={<Contact />} />
      
      </Routes>
    </div>
  )
}

export default App
