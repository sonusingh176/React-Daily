
import './App.css'

import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import LoginScreen from './screen/LoginScreen'
import HomeScreen from './screen/HomeScreen'
import RegisterScreen from './screen/RegisterScreen'

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>

        <Route path='/' element={<HomeScreen/>} />
        <Route  path='/login' element={<LoginScreen/>} />
        <Route  path='/register' element={<RegisterScreen/>} />
        
      </Route>
    ),
  )

  return (
  <>
    <RouterProvider router={router}/>
  </>
  )
}

export default App
