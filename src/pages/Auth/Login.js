import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { login, reset } from "../../redux/reducers/auth/authSlice";
import { toast } from "react-hot-toast";

import Loader from "../../components/SharedComponents/Loader";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isLoading, user, isError, message } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission based on isSignUp prop

    const { email, password } = formData;

    if (!email) {
      return toast.error("Email is Required.");
    }
    if (!password) {
      return toast.error("Password is Required.");
    }

    dispatch(login(formData));
  };

  useEffect(() => {
    if (user && message) {
      if (user.role === "admin") {
        navigate("/admin/analytics");
      } else {
        navigate("/");
        toast.success(message);
        dispatch(reset());
      }
    }

    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }

    if (user) {
      if (user.role === "admin") {
        navigate("/admin/analytics");
      } else {
        navigate("/");
      }
    }
  }, [user, isError, message, dispatch]);

  return (
    <div style={{ paddingTop: "150px" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container className="w-50 authWidth p-5  rounded ">
          <h1 className=" mb-3">Sign In</h1>
          <Row>
            <Col>
              <Form
                onSubmit={handleSubmit}
                className=""
                style={{ borderRadius: "15px" }}
              >
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

                <Button variant="success" type="submit" className="mt-3">
                  Login
                </Button>
                <div className="forgot-password mt-2">
                  <p>
                    You Have No Account ?
                    <Link to="/Register" style={{ marginLeft: "15px" }}>
                      Register
                    </Link>
                  </p>
                  <p>
                    <Link to="/forget-password"> Forgot Password?</Link>
                  </p>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Login;
