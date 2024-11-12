import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Spinners = () => {
  return (
  

<Container fluid="md">
<Row className='d-flex justify-content-center align-items-center' style={{height:'100vh',zIndex:'999'}}>

  <Col xs lg="2">
      <Spinner animation="grow" variant="danger" />{' '}
      <Spinner animation="grow" variant="warning" />{' '}
      <Spinner animation="grow" variant="info" />{' '}
  </Col>

</Row>
</Container>
  )
}

export default Spinners