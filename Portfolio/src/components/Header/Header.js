import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
 import DarkModeIcon from '@mui/icons-material/DarkMode';
 import LightModeIcon from '@mui/icons-material/LightMode';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';


const Header = () => {

  const { theme, toggleTheme } = useTheme();// Use useTheme hook to access theme context

  const [showButtons, setShowButtons] = useState(true);
  const [isNavOpen,setIsNavOpen]=useState(false);
  

  const toggleButtons = () => {
   setShowButtons(!showButtons);
   setIsNavOpen(!isNavOpen)
  };

  function closeNav(){

    setShowButtons(!showButtons);
    setIsNavOpen(!isNavOpen);
    
  };
  
 
  
  return (
    <div className={`header-${theme}`} > 

          <nav style={{height:'30vh'}}> 
            <div className="">
                <span class="logo">SONU</span>
            </div> 
         
         <div style={{display:'flex', justifyContent:'end' ,alignItems:"center"}}>
         <ul className={isNavOpen ? 'mobilemenuOn' : 'mobilemenuOff'}>
                <li> <Link to='/' className='active' onClick={closeNav}>home</Link> </li>
                <li> <Link to='/about' onClick={closeNav}>about</Link> </li>
                <li> <Link to='/work' onClick={closeNav}>work</Link> </li>
                <li> <Link to='/skill' onClick={closeNav}>skills</Link> </li>
                <li> <Link to='/contact' onClick={closeNav}>contact</Link> </li>
                <li> <Link to='/resume' onClick={closeNav}>resume</Link> </li>  
            </ul>  


            <label htmlFor='check' onClick={toggleButtons}>{showButtons ? <DensityMediumIcon id='collasp'/> :<CloseIcon id='closeicon'/>}</label>
       
       {theme === 'light' ?  (<LightModeIcon className='lighticon light-mode' onClick={toggleTheme} />):(<DarkModeIcon className='darkicon dark-mode' onClick={toggleTheme} />)}
            
         </div>
          
          </nav>

       

          </div>
     
  )
}

export default Header