
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from 'react-router-dom';
import Layout from './containers/layout/Layout';
import './App.css'

import Home from './pages/Home/';
import About from './pages/About';

import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import OurServices from './pages/OurService';
import DashboardLayout from './containers/layout/dashboard';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      
      
      <Route>

          <Route path='/' element={<Layout/>}>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}></Route>
                  <Route path='/services' element={<OurServices/>}></Route>
                  <Route path='/gallery' element={<Gallery/>}></Route>
                  <Route path='/blog' element={<Blog/>}></Route>
                  <Route path='/contact' element={<Contact/>}></Route>
                  <Route path='/login' element={<Login/>}></Route>

          </Route>

        <Route path='/dashboard' element={<DashboardLayout/>}>

        </Route>

      </Route>

     

    )
  );

  return (
    <>
    <RouterProvider router={router}/>
   </>
  )
}

export default App
