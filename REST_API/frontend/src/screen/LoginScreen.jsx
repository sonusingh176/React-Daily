import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { jwtDecode } from "jwt-decode";


const LoginScreen = () => {
   const {setUsername,setLogged}= useOutletContext(); //destructure
   console.log(setUsername,setLogged,"LoginScreen");

   const navigate=useNavigate();
   

  const [formData , setFormData] = useState({
    email:'',
    password:'',
  }) 

  const [error,setError] =useState('');

  const handleChange = (e) => {
    const {name ,value}=e.target;
    setFormData((prevData)=>({...prevData,[name]:value}));

  }

  const SubmitHandler = async(e) => {
    e.preventDefault();

    setError('');// Reset error state before submitting

    try {
      const res= await axios.post("http://localhost:5000/api/v1/users/signin",formData)
      if(res.status ===200){
        localStorage.setItem("token",res.data.token);
        
        const decodedToken = jwtDecode(res.data.token);
        setUsername(decodedToken.username);
        
        setLogged(true);
        navigate('/');

      }

      console.log(res.data.username);
    } catch (error) {
      console.log(error);
      //Ternary Operator (condition ? true : false)
       setError(error.response ? error.response.data.message : 'An error occurred. Please try again.');

    }

  }


  return (
    <>
  {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={SubmitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" name="email" value={formData.email} onChange={handleChange}   />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control type='text' placeholder='Enter Password' name="password" value={formData.password} onChange={handleChange}/>
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
    </>
  )
}

export default LoginScreen

