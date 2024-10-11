import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { UserContext } from "./ContextApi";

const users = [
  { email: "sonu@gmail.com", password: "12345", name: "Sonu" },
  { email: "gaurav@gmail.com", password: "12345", name: "Gaurav" },
];

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); //you need to use the useContext hook to access the setUser function from the UserContext.

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find(
      (obj) => obj.email === email && obj.password === password
    );

    if (user) {
      setUser(user.name);

      //extract name &  email
      const userdata = { email: user.email, name: user.name };
      // set logged user data in localstorage
      localStorage.setItem("user", JSON.stringify(userdata));
      //after successful logging redirect to profile page
      navigate("/profile");
    } else {
      setError("User does not Exist");
    }
  };

  return (
    <Container>
      <Row>
        <Col l md={{ span: 6, offset: 3 }}>
          <h2 className="text-center">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          {error ? (
            <div role="alert" class="fade alert alert-danger show">
              <div class="alert-heading h4">{error}</div>
            </div>
            ) : null
          }
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
