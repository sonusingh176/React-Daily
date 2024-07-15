import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col ,Alert } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(null);

  const [LoginLink, setLoginLink] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/v1/users/signup",formData);

      setMessage(`Registration Successful' ${res.data.userobj.username} Now you can login`)
      console.log(res);
      localStorage.setItem("token", res.data.token);
      setLoginLink(true) // Show login link after successful signup
    } catch (error) {
      console.log(error);
      setMessage(null);
      setLoginLink(false) 
    }
  };

  return (
    <>
     {message && <Alert variant="success">{message}</Alert>}
      <Form onSubmit={SubmitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {LoginLink && (
        <Row className="py-3">
          <Col>
            You want to Login? <Link to={"/login"}>Login</Link>
          </Col>
        </Row>
      )}
    </>
  );
};

export default RegisterScreen;
