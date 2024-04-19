const SideBar = () => {
    return (
      <>
          <aside id="sidebar" className="sidebar">
  
              <ul className="sidebar-nav" id="sidebar-nav">
  
              <li className="nav-item">
                  <a className="nav-link " href="#">
                  <i className="bi bi-grid"></i>
                  <span>Dashboard</span>
                  </a>
              </li>
              {/* <!-- End Dashboard Nav --> */}
  
              <li className="nav-item">
                  <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                  <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
                  </a>
                  <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                  <li>
                      <a href="#">
                      <i className="bi bi-circle"></i><span>Alerts</span>
                      </a>
                  </li>
  
  
                  </ul>
              </li>
                  {/* <!-- End Components Nav --> */}
  
              <li className="nav-item">
                  <a className="nav-link collapsed" href="#">
                  <i className="bi bi-card-list"></i>
                  <span>Register</span>
                  </a>
              </li>
              {/* <!-- End Register Page Nav --> */}
  
              <li className="nav-item">
                  <a className="nav-link collapsed" href="#">
                  <i className="bi bi-box-arrow-in-right"></i>
                  <span>Login</span>
                  </a>
              </li>
              {/* <!-- End Login Page Nav --> */}
  
  
              </ul>
  
          </aside>
      
      </>
    )
  }
  
  export default SideBar