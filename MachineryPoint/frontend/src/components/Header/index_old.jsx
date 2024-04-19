

const Header = () => {
    return (
      <>
      <div id="topbar" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope-fill"></i><a href="mailto:contact@example.com">info@example.com</a>
          <i className="bi bi-phone-fill phone-icon"></i> +1 5589 55488 55
        </div>
        <div className="cta d-none d-md-block">
          <a href="#about" className="scrollto">Get Started</a>
        </div>
      </div>
    </div>
      {/* // <!-- ======= Header ======= --> */}
      <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
  
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt=""/>
         
          <span>Machinery Point</span>
         
        </a>
  
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
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
  
            <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
            <li><a className="nav-link scrollto" href="#team">Team</a></li>
            <li><a href="blog.html">Blog</a></li>
          
  
           
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
  
      </div>
    </header>
      
      </>
      
    )
  }
  
  export default Header