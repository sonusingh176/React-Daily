import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [formData,setFormData] =useState({
        email:'',
        password:'',
    })

    const navigate = useNavigate();

    console.log(formData);

   const  handleChange=(event)=>{
    const {name,value} = event.target;
    setFormData((prev)=>({...prev,[name]:value}))
    }


  const onSubmitHandler= async(e) => {
    e.preventDefault();

    try {
        const res= await axios.post('/api/users/login',formData);
        if(res.data.success) {
            localStorage.setItem('hosp_token',res.data.token);
            toast.success(res.data.username +' '+'logged In');
            navigate('/');
        }
               
    } catch (error) {
        toast.error(error?.response?.data.message || error.message || "Something went wrong..." )
        console.log(error)
    }

    
  }

  return (
    <div className="form-container">
        <Form  onSubmit={onSubmitHandler} className='mx-auto register-form' style={{width:'18rem'}}>


            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" name='email' value={formData.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password'  value={formData.password} onChange={handleChange}  />
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