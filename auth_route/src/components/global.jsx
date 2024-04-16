import {Outlet , NavLink ,useNavigate, useLocation, Navigate } from 'react-router-dom'
import AuthConsumer from '../hooks/auth'

//**ALL Components */

  export const HomePage = () => {
    const [authed , dispatch]= AuthConsumer();

    console.log(authed, dispatch);

      return (
          <>
        <div className="container">
          <h2 className='text-center text-warning'>Authentication</h2>
          <Nav></Nav>
        
          <Outlet/>
        </div>
      
          </>
      
      )
    }

  export const LoginPage = () => {
    const [authed,dispatch] = AuthConsumer()

    let navigate = useNavigate();

    return (
      <>
      
      <div>Login Page</div>
      <button className='btn btn-primary' onClick={()=>{
        dispatch({type :'login'})
        navigate('/dashboard', {replace : true})
        }}>Login</button>
    </>
    )
  }

  export const HomeContent = () => {
    return (
      <div>Home Content Components</div>
    )
  }

  export const Nav = () => {

    const [{auth}] = AuthConsumer();

    console.log(auth ,"nav")

    return (
        <nav className="nav">
        <NavLink exact="true" to={'/'} activeClassname="active" className="nav-link active" aria-current="page">Home</NavLink>
        <NavLink to='/login' activeClassname="active" className="nav-link" >Login</NavLink>
        {
          auth ? (<>
          <NavLink to='/dashboard' activeClassname="active" className="nav-link">Dashboard</NavLink>
         <NavLink to='/setting'activeClassname="active"  className="nav-link" >Setting</NavLink>
         </>
         ) :<></>
        }
        
        
      </nav>
    )
  }

  export const Dashboard = () => {
    const [authed,dispatch] = AuthConsumer()
    let navigate = useNavigate();

    return (
      <>
      <div>Dashboard comp</div>
      <button className='btn btn-danger' onClick={()=>{
              dispatch({ type :'logout' })
              navigate('/login', {replace : true}) 
            }}>Logout</button>
      </>
      
    );
  }

  export const Setting = () => {
    return (
      <div>Setting</div>
    )
  }

  export function RequireAuth({children}){
    const [authed] = AuthConsumer();
    console.log(authed);
    const location = useLocation();
    return authed.auth === true ?(children):(
      <Navigate to={'/login'} replace state={{path:location.pathname}}></Navigate>
    )
  }
