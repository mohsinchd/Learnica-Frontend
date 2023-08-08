import { useState } from "react";
import { Container, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import Avatar from "../../components/SharedComponents/Avatar";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const selectImageHandler = (e) => {
    const file = e.target.files[0];

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onloadend = () => {
      setImagePrev(fileReader.result);
      setImage(file);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission based on isSignUp prop
  };

  return (
    <div style={{ paddingTop: "150px" }}>
      <Container className="w-50 authWidth">
        <Row>
          <h1 className="text-center">Sign Up</h1>
          <Col>
            <Form
              onSubmit={handleSubmit}
              className=""
              style={{ borderRadius: "15px" }}
            >
              <Avatar src={imagePrev} alt={"Error"} />
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

              <Form.Group controlId="formEmail">
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
                <InputGroup>
                  <Form.Control
                    type={`${showPassword ? "text" : "password"}`}
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <InputGroup.Text
                    className="bg-dark text-light pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <AiFillEye size={20} />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={`${showPassword ? "text" : "password"}`}
                    placeholder="Confirm password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <InputGroup.Text
                    className="bg-dark text-light pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <AiFillEye size={20} />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="profilePicture">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Select Profile Photo"
                  onChange={selectImageHandler}
                />
              </Form.Group>

              <Button variant="success" type="submit" className="mt-3">
                Register
              </Button>

              <div className="forgot-password mt-2">
                <p>
                  Already Have Account ?
                  <Link to="/Login" style={{ marginLeft: "15px" }}>
                    Login Here
                  </Link>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
