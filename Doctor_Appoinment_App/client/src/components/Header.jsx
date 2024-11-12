import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Navbar from 'react-bootstrap/Navbar';
import { FaAlignJustify,FaUserCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Header = ({Toggle}) => {

  const {user} = useSelector(state => state.user);

  console.log(user,"header")

  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#home">
            <FaAlignJustify onClick={Toggle}  />
          </Navbar.Brand>
 
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Badge bg="secondary">{user && user?.notifications.newNotification.length}</Badge> {' '}<Link to="/profile">{user?.name} </Link>
          </Navbar.Text>
        </Navbar.Collapse>
          
        </Container>
      </Navbar>
  )
}

export default Header