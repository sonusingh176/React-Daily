import { useEffect,useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

import Product from '../components/Product';

const HomeScreen = () => {

  const [products , setProducts] = useState([]);


  useEffect(() =>{
    const fetchProducts =async () =>{
      const {data} = await axios.get('/api/products') //since we added the proxy, we don't need to add localhost 5000 .
      console.log(data);
      setProducts(data);
    };
    fetchProducts()
  },[]);




  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
           <Product product={product}/> 
          </Col>
        ))
        }
      </Row>
    </>
  );
};

export default HomeScreen;
