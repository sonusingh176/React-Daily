import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route}  from 'react-router-dom';


import Layout from './Layout/layout'
import Shop1 from './pages/Shop1'
import Shop2 from './pages/Shop2'

import './App.css'

function App() {
 

  const router = createBrowserRouter(
            createRoutesFromElements(
              <Route path='/' element={<Layout/>}>
                <Route path='/shop1' element={<Shop1/>} />
                <Route path='/shop2' element={<Shop2/>} />
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
