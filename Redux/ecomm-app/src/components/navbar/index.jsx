import {useSelector} from 'react-redux'

const Navbar = () => {

  const { cart } =useSelector(state=>state.rootReducer)



    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            
           
            </ul>
            <div className="ml-2">
              <button className="btn btn-warning btn-sm">cart ${cart.cart.length}</button>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  
  
  export default Navbar;
  