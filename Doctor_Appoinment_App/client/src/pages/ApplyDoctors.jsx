import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import { TimePicker } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alertSlice";

const ApplyDoctors = () => {
  const [validated, setValidated] = useState(false);

  const {user} =useSelector((state)=>state.user);
  const dispatch =useDispatch();
//   const navigate=useNavigate();

  const [formData, setFormData] = useState({

    fname: "",
    lname: "",
    phone: "",
    email: "",
    address: "",
    website: "",
    spec: "",
    expe: "",
    consFee: "",
    time: "",
  });

  console.log(formData);

  const handleSubmit = async(event) => {
  
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    try {
        dispatch(showLoading());

        const res=await axios.post('/api/users/apply-doctor',{...formData, userId:user._id},{
            headers: {
                Authorization: 'Bearer ' +localStorage.getItem('hosp_token'),
            }
        });
        console.log(res)
        dispatch(hideLoading());
    } catch (error) {
        console.log(error);
        dispatch(hideLoading());
        
    }
  };

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData(prev =>({...prev,[name]:value}));
  };

 


  return (
    <Container>
      <div className="bg-primary mt-3 mb-3 p-2 text-center text-white">
        {" "}
        <h4>Apply Doctor</h4>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <h4>
            Personal Details <span style={{ color: "red" }}>*</span>
          </h4>

          <Form.Group as={Col} md="3">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              name="fname"
              value={formData.fname}
              onChange={handleInputChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              name="lname"
              value={formData.lname}
              placeholder="Last name"
              onChange={handleInputChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="phone"
              name="phone"
              value={formData.phone}
              required
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Phone.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                aria-describedby="inputGroupPrepend"
                required
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter Email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide Address.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Label>Website Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <h4>
            professional Details <span style={{ color: "red" }}>*</span>
          </h4>

          <Form.Group as={Col} md="3">
            <Form.Label>specialization</Form.Label>
            <Form.Control
              type="text"
              placeholder="specialization"
              name="spec"
              value={formData.spec}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide Specialization.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Label>Experience</Form.Label>
            <Form.Control
              type="text"
              placeholder="experience"
              name="expe"
              value={formData.expe}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide Experience.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Label>Fees Per consultation</Form.Label>
            <Form.Control
              type="text"
              placeholder="consultation Fee"
              name="consFee"
              value={formData.consFee}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Label>Timing</Form.Label>
            <TimePicker.RangePicker format="HH:mm" />
          </Form.Group>
        </Row>

        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
};

export default ApplyDoctors;

/**
 * 
 * Maintaining Existing Data: Using { ...formData, userId: user._id } keeps all the existing form data while only adding userId. This is a shorthand way to copy all fields from formData and then append userId without modifying the original formData object directly.


 */