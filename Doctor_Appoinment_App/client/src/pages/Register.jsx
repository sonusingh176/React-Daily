import { useState } from "react";
import "../style/register.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link } from 'react-router-dom'

const Register = () => {


    const onSubmitHandler =(e) => {
         e.preventDefault();
         const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log(email, password);

    }

  return (
   <>
        <div className="form-container">
            <Form  onSubmit={onSubmitHandler} className='mx-auto register-form' style={{width:'18rem'}}>

                <Form.Group className="mb-3">
                    <Form.Label>Name </Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" name="name"/>     
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" name="email"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                </Form.Group>

                <Link to="/login" className="">Already Register! Go to Login</Link>

                <Button variant="primary" type="submit">
                    Register
                </Button>

            </Form>
        </div>
   </>
  )
}

export default Register