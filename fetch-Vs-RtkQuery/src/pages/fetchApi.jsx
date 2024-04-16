import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from 'react';

const fetchApi = () => {

  const [product,setProduct] = useState([]);

useEffect(()=>{
  fetch('https://api.escuelajs.co/api/v1/products')
  .then((res)=>{
    return res.json();
  })
  .then((data)=>{
    console.log(data);
    setProduct(data)
  })
},[])




  return (
    <>
        {
          product.map((prod)=>{
           <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{prod.title}</Card.Title>
            <Card.Text>
          {prod.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
           </Card>
          })
        }
  
        
    </>
   
  )
}

export default fetchApi