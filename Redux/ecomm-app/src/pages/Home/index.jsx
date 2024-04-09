

import Navbar from '../../components/navbar'
import Card from '../../components/Card'
import { useEffect, useState } from "react"

const index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(data =>{
           // console.log("Fetched products:", data);
            setProducts(data)
        } )
        .catch(err => console.error(err));
  };


  return (
    <div className='container'>
    <Navbar/>
    <Card products={products} />
    </div>
  )
}

export default index