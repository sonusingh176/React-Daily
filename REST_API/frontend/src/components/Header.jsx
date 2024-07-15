import {Navbar, Nav ,Container , NavDropdown } from 'react-bootstrap'

import { Link} from 'react-router-dom'


const Header = ({username,isLogged,logout}) => {

  return (
   <header>
     <Navbar expand="lg"  bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand  as={Link} to="/">React-Bootstrap-Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

          {
            !isLogged && !username ? (
              <>
              <Link to="/login">Sign In</Link>
              <Link to="/register">Sign Up</Link>

              </>
            ) :(
              <NavDropdown title={username} id='username'>
              <Link to='/profile'>
                <NavDropdown.Item>{username}</NavDropdown.Item>
              </Link>
              <NavDropdown.Item onClick={logout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            )
          }
           
          
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   </header>
  )
}

export default Header