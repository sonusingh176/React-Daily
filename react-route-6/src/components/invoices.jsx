import {Link ,Outlet} from 'react-router-dom'
import { getInvoices } from '../data'
import { useState, useEffect } from 'react';

const Invoices = () => {
    let invoices=getInvoices();
    const [invoicesData, setInvoicesData] =useState([]);

    useEffect(() => {
        setInvoicesData(invoices);
    },[invoices]);



  return (
    <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Invoice Number</th>  
                </tr>
               
            </thead>
            <tbody>
            {invoicesData.map((invoice) =>{
                return(
                    <tr key={invoice.id}>
                        <th>{invoice.id}</th>
                        <th scope="row">                           
                            <Link to={`/invoice/${invoice.number}`}>
                                {invoice.number}
                            </Link>
                        </th>
                    </tr>
                )
            })}
             
            </tbody>
        </table>


        <Outlet/>
        
    </div>
  )
}

export default Invoices 
