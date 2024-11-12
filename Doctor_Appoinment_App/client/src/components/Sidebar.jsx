
import { useEffect, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { userMenu,adminMenu } from '../Data/data';
import { NavLink, useNavigate  } from 'react-router-dom';
import '../style/Sidebar.css'
import { useSelector } from 'react-redux';
import { RiLogoutCircleFill } from "react-icons/ri";
import { toast } from "react-toastify";


const Sidebar = ({ToggleStatus ,onClose}) => {

  const navigate= useNavigate()

  const {user} = useSelector(state => state.user);
  console.log(user)

  //render menu list as per role
  const SidebarMenu = user?.role?.isAdmin ? adminMenu : userMenu;
  console.log(SidebarMenu);


  const handleLogout =()=>{
    localStorage.removeItem('hosp_token');
    toast.success("Logout Successfully");
    navigate('/login');
  }

  return (
   


        <Offcanvas show={ToggleStatus} onHide={onClose}>
           
            <Offcanvas.Header>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                <button onClick={onClose} className="btn-close"></button>
            </Offcanvas.Header>
          
            <Offcanvas.Body>
            <Nav className="justify-content-center flex-column" activeKey="/">
             
              {
                SidebarMenu.map((menu,indx) =>{
                  return(
                    <Nav.Item key={indx} className="sidebar">
                      <NavLink
                        to={menu.path}
                        className={({isActive,isPending}) =>
                                isPending? "pending" : isActive? "active" :""
                        }
                        >  {menu.name} </NavLink> 
                    </Nav.Item>
                  )
                
                })
              }
          
              <Nav.Item className="sidebar logout-area" style={{padding:'4px 4px',fontWeight:'600',marginTop:'5px',border:'1px solid'}} onClick={handleLogout}>
                  <RiLogoutCircleFill style={{color:'red'}}/> LOGOUT
              </Nav.Item>
            
            </Nav>
          
            </Offcanvas.Body>  

        </Offcanvas>
    
  )
}

export default Sidebar

/**
 * A <NavLink> is a special kind of <Link> that knows whether or not it is "active", "pending", or "transitioning". 
 * 
 * React Router, the active class is automatically applied to a NavLink when the to path matches the current URL.
 * 
 */