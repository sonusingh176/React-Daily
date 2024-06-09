import './App.css'
import {createBrowserRouter, createRoutesFromElements ,RouterProvider, Route,} from 'react-router-dom'
import Layout from './layout/Layout'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index={true} path='/' element={<HomeScreen/>}/>
        <Route path='/product/:id' element={<ProductScreen/>}/>
      </Route>
    )
)


 
  return (
 <>
    <RouterProvider router={router}/>
 </>
  )
}

export default App
