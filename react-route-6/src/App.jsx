import './App.css'
import {Link ,Outlet} from 'react-router-dom'

function App() {
  

  return (
   <>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container-fluid">
      


        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/invoice">Invoice</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/expense">Expense</Link>
            </li>
        
          </ul>
      
        </div>
      </div>
    </nav>

    <Outlet/>
   </>
  )
}

export default App
