
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useState } from 'react';


const Layout = () => {

    const [toggle,setToggle] =useState(false);
    
    const handleToggle=() => {
        setToggle(!toggle);
    }


  return (
     <>
        <Container fluid>
            <Row>

                <Sidebar ToggleStatus={toggle}  onClose={() => setToggle(false)}/> 

                <Header Toggle={handleToggle}/>
                <main className='px-3'>
                    <Outlet/>
                </main>
            </Row>

        </Container>
    </>
    
  )
}

export default Layout