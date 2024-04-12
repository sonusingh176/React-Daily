import {useParams} from 'react-router-dom'
import {findInvoiceByNumber} from '../data'
import { useState, useEffect } from 'react';


const Bills = () => {
    let params = useParams();
    let invoiceNumber  = findInvoiceByNumber(parseInt(params.invoiceNum));

    const [invoiceData , setInvoicesData] = useState([]);

    useEffect(()=>{
        setInvoicesData(invoiceNumber)
     } ,[invoiceNumber])

    

  return (
    <>
    {invoiceData && (
             <div className="card" style={{ width: "18rem" }}>
             {/* <img src="..." className="card-img-top" alt="..." /> */}
             <div className="card-body">
                 <h5 className="card-title">Name : {invoiceData.name}</h5>
                 <p className="card-text">Amount : {invoiceData.amount}</p>
                 <p className="card-text">Due : {invoiceData.due}</p>
                 {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
             </div>
         </div>
    )}     
    </>
  )
}

export default Bills

