import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Navbar</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Resume</a>
          </li>
  
   
        </ul>
     
      </div>
      <i class="bi bi-brightness-high-fill"></i>
    </div>
  </nav>
  )
}

export default Navbar