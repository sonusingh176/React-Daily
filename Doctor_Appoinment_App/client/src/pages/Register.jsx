import { useState } from "react";
import "../style/register.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link ,useNavigate } from 'react-router-dom'
import axios from 'axios';
import {toast} from 'react-toastify';
import {useDispatch} from 'react-redux'
import { showLoading,hideLoading } from '../redux/features/alertSlice';


const Register = () => {

    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
    });

    
    const dispatch =useDispatch();
    const navigate =useNavigate();

    const handleChange =(e)=>{
        const {name,value}=e.target;
        setFormData((prev)=>({...prev,[name]:value}));
    }

    const onSubmitHandler =async(e) => {
         e.preventDefault();

        try {
            dispatch(showLoading())
            const response = await axios.post('/api/users/register',formData);
            dispatch(hideLoading())
            if(response.data.success){
               toast.success(response.data.message);
               navigate('/login');
              
            }
            console.log(response);
        } catch (error) {
            toast.error(error.response.data.message,{
                position: "top-center",
                theme: "colored",
               });
            console.log(error)
        }

    }

  return (
   <>
        <div className="form-container">
            <Form  onSubmit={onSubmitHandler} className='mx-auto register-form' style={{width:'18rem'}}>

                <Form.Group className="mb-3">
                    <Form.Label>Name </Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}/>     
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange} />
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