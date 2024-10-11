import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";




const Dashboard = () => {
  const user = useContext(AuthContext);


  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>{user}Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="#features">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );

};

export default Dashboard;
