import { useState } from 'react'
import './App.css'
import Layout from './Layout'
import FetchApi from './pages/fetchApi';
import AxiosApi from './pages/axiosApi';


import {
  createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from "react-router-dom";

function App() {
  
  const router =createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='/fetch-data' element={<FetchApi/>}/>
        <Route path='/fetch-axios' element={<AxiosApi/>}/>
        {/* <Route path='/fetch-data' element={<RtkQuery/>}/> */}
    </Route>

  ))

  return (
  <>
<RouterProvider router={router}/>
     
  </>
  )
}

export default App
