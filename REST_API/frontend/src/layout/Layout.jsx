
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";


const Layout = () => {
  const [username,setUsername] =useState('');
  const [isLogged,setLogged] = useState(false);
  console.log(isLogged,"layout");

  const logout=() => {
    setUsername('');
    setLogged(false);
    localStorage.removeItem('token');
  }

 useEffect(()=>{
  const token= localStorage.getItem('token');
  if(token){
    const decodeToken=jwtDecode(token);
    setUsername(decodeToken.username);
    setLogged(true);
    
  }
  

 },[])

  return (
    <>
    <Header username={username} isLogged={isLogged} logout={logout}/>
    <main className='py-3'>
        <Container>
         <Outlet context={{username, setUsername, isLogged,setLogged}}/>
        </Container>
    </main>
    
    </>
  )
}

export default Layout