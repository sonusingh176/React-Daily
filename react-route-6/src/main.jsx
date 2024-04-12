import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import Expense from './components/expenses'
import Invoice from './components/invoices'
import Bills from './components/bills.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App />}>

        <Route path='/invoice' element={<Invoice/>}>
          <Route path=':invoiceNum' element={<Bills/>}/>
          <Route index  element={<div className='container'> <p>Please Select Invoice Number...</p></div>}/>
        </Route>
        <Route path='/expense' element={<Expense/>}/>
       
         {/* if url not match  - In React this is called no match Route*/}
        <Route path='*' element={<div className='container'><h3 className='text-center text-danger mt-5'>There is nothing, Url not match</h3></div>}/>
  
      </Route>
     
      
    </Routes>
    
    </BrowserRouter>
  
  </React.StrictMode>,
)
