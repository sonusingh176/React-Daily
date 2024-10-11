import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';
import Form from "react-bootstrap/Form";
import axios from 'axios';
import { useState } from "react";
import { toast } from "react-toastify";
import useValidation from "../../utils/useValidation";
import { BASE_URL } from "../../helper/config";
import {useNavigate} from "react-router-dom"

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [loading,setLoading] = useState('');
    const [errors,setErrors] = useState('');

    const navigate =useNavigate();
    
    const validateForm = () => {
        const valiObj = {};
        if(email.length === 0){
            valiObj.email = ["Email is required"]; // Error as an array because we use custom useValidation function.
           
        }
        if(password.length === 0){
            valiObj.password = ["Password is required"];
          
        }

        // Set the errors object
        setErrors(valiObj);

        // If there are no errors (object is empty), return true. 
        //  when fields are holds value, then if(email.length === 0) is not runs. and thats why keys like 'email' & 'password' are not created in valiObj.
        return Object.keys(valiObj).length === 0;

    }
 
    const handleSubmit =async(event) => {
        event.preventDefault();

        if (!validateForm()) {
            return; // Stop form submission if validation fails
        }
        
        setLoading(true);
        const data ={email,password}; //when key & value are same. we can write like this. 

        try {
           const response = await axios.post(`${BASE_URL}/user/login`,data, {withCredentials: true});
         
           if(response.data.status == 200){
            localStorage.setItem('loggedIn', response.data.userName)
             navigate('/dashboard')
           }
            
        } catch (error) {
           
            setLoading(false);
            toast.error(error.message || "An unknown error occurred")

            
        }
    };

  return (
    <Container>
     
        <Card  className="mt-5 m-auto" style={{ width: '25rem' }}>
        <Card.Body>
         <Card.Title>LOGIN</Card.Title>
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
              {useValidation(errors, 'email')}
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
              {useValidation(errors, 'password')}
           
            </Form.Group>
          
            <Button variant="primary" type="submit">
                {loading ? (
                    <>
                        <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                       />{" "}
                       Submitting...
                    </>
                    ) : (
                        "Submit"
                    )
                }
              
             
            </Button>
          </Form>
        </Card.Body>
         
        </Card>
       
    </Container>
  );
};

export default Login;
