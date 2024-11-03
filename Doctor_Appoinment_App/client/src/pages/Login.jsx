import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link } from 'react-router-dom'

const Login = () => {

  const onSubmitHandler=() => {
    
  }

  return (
    <div className="form-container">
    <Form  onSubmit={onSubmitHandler} className='mx-auto register-form' style={{width:'18rem'}}>


        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" name='email' />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' />
        </Form.Group>

        <Link to="/register" className="">Not Register Yet! Go to Register</Link>

        <Button variant="primary" type="submit">
            Login
        </Button>

    </Form>
</div>
  )
}

export default Login