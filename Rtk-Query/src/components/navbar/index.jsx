import {Link} from "react-router-dom";

const Navbar = () => {

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
                <Link  to='/shop1' className="nav-link active" aria-current="page">
                Shop 1
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/shop2" className="nav-link active" aria-current="page">
                  Shop 2
                </Link>
              </li>

            
           
            </ul>
            <div className="ml-2">
              <button className="btn btn-warning btn-sm">cart </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  
  
  export default Navbar;
  