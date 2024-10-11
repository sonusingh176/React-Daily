import { Container, Navbar ,Button} from "react-bootstrap";
import  { useContext, } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './ContextApi';


const Header = () => {

    //you need to use the useContext hook to access the setUser function from the UserContext.
    const { user, setUser } = useContext(UserContext);
    const navigate =useNavigate();
    
    if (!user) {
      navigate('/login');
      return null;
    }
  
    const handleLogout = () => {
      setUser(null); // Clear the user data
      navigate('/login');
    };
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">WarBook</Navbar.Brand>
        <Navbar.Toggle />


        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{user}</a>
          </Navbar.Text>
        </Navbar.Collapse>

        <Button variant="primary" onClick={handleLogout}>Logout</Button>
      </Container>
    </Navbar>
  );
};

export default Header;
