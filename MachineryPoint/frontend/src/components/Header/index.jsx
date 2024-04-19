import { NavLink } from 'react-router-dom'
import UserContext from '../../context/userContextProvider';
import { useContext } from 'react';

const Header = () => {
  const {userData} = useContext(UserContext);

  console.log('userData', userData)
  return (

  
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">

        <h1 className="logo me-auto"><a href="#">Machinery Point</a></h1>
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        {/*  <a href="#"="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}

        <nav id="navbar" className="navbar">
          <ul>
            <li><NavLink exact='true' to="/" activeClassname="active">Home</NavLink></li>

            <li><NavLink to="/about">About</NavLink></li>

            <li className="dropdown megamenu"><a href="#"><span>Products</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li>
                  <a href="#">Rotary Oven</a>
                  <a href="#">Deck Oven</a>
                  <a href="#">Pizza Oven</a>
                  <a href="#">Planetary Mixer</a>
                  <a href="#">Spiral Mixer</a>
                  <a href="#">Rusk Slicer</a>
                </li>
                <li>
                  <a href="#">Cookies Drop Machine</a>
                  <a href="#">Proofer</a>
                  <a href="#">Sandwich Griller</a>
                  <a href="#">Waffle Maker</a>
                  <a href="#">Chapati Bhatti</a>
                  <a href="#">Dough Kneader</a>
                </li>
                <li>
                  <a href="#">Dough Ball Cutting Machine</a>
                  <a href="#">Chapati Pressing Machine</a>
                  <a href="#">Roti Making Machine</a>
                  <a href="#">French Fries Machine</a>
                  <a href="#">Pulveriser</a>
                  <a href="#">Roasting Machine</a>
                </li>
                <li>
                  <a href="#">Juice Dispenser</a>
                  <a href="#">Blender Juicer</a>
                  <a href="#">Mixer Griender</a>
                  <a href="#">Kadukas Machine</a>
                  <a href="#">Cabbage Cutter Machine </a>
                  <a href="#">Vegetable Cutter</a>
                </li>
                <li>
                 <a href="#">Garlic Bulb Breaker</a>
                  <a href="#">Onion Grinding Machine</a>
                  <a href="#">Potato Peeler Machine</a>
                  <a href="#">Gravy Machine</a>
                  <a href="#">Potato Chips Machine</a>
                  <a href="#">Roasting Machine</a>
                </li>
                <li>
                <a href="#">Nylon Sev Machine</a>
                  <a href="#">Besan Mixer</a>
                  <a href="#">Fafda Making Machine</a>
                  <a href="#">Oil Press Machine</a>
                  <a href="#">Coating Pan</a>
                  <a href="#">Oil Hydro Dryer</a>
                 
                </li>
              </ul>
            </li>

            <li className="dropdown"><a href="#"><span>Category</span></a> </li>
            
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
           
            <li><NavLink  to="/blog">Blog</NavLink></li>

            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><a href="#" className="getstarted">Get Quote</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

      </div>
  </header>
    

    
  )
}

export default Header