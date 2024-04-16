// import React from 'react'
// import {Container ,Nav , Navbar} from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <>
      <Navbar bg="light" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                
                <Nav.Link as={Link} to="/fetch-data">Fetch Data</Nav.Link>
                <Nav.Link as={Link} to="/fetch-axios">Axios Data</Nav.Link>
                <Nav.Link as={Link} href="#pricing">Pricing</Nav.Link>
            </Nav>
           </Container>
      </Navbar>
   </>
  )
}

export default Header