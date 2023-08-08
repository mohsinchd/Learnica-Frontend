import { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission based on isSignUp prop
  };

  return (
    <div style={{ paddingTop: "150px" }}>
      <Container>
        <Row>
          <h3 className="text-center">Register & start Journy</h3>
          <Col>
            <Form
              onSubmit={handleSubmit}
              className=""
              style={{ borderRadius: "15px" }}
            >
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="confirm password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="success" type="submit" className="mt-3">
                Register
              </Button>

              <div className="forgot-password mt-2">
                <p>
                  Already Have Account ?
                  <a href="/Login" style={{ marginLeft: "15px" }}>
                    Login Here
                  </a>
                </p>
              </div>
              <div className="forgot-password mt-2">
                <a href="/">Forget Password</a>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
