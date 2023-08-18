import { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import Avatar from "../../components/SharedComponents/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../redux/reducers/auth/authSlice";
import toast from "react-hot-toast";

import Loader from "../../components/SharedComponents/Loader";
import { getUserInfo } from "../../redux/reducers/user/userSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isLoading, user, isError, message } = useSelector(
    (state) => state.auth
  );

  const [showPassword, setShowPassword] = useState(false);

  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
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
    const userData = new FormData();
    // Handle form submission based on isSignUp prop
    const { name, email, password, confirmPassword } = formData;
    if (!name || !email || !password || !confirmPassword) {
      return toast.error(
        "Name, Email, Password, Confirm Password and Image is Required"
      );
    }

    if (password !== confirmPassword) {
      return toast.error("Password and Confirm Password Not Matched.");
    }

    userData.append("name", name);
    userData.append("email", email);
    userData.append("password", password);
    userData.append("file", image);

    console.log(image);

    dispatch(register(userData));
  };

  // Side Effects
  useEffect(() => {
    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }

    if (user && message) {
      navigate("/");
      toast.success(message);
      dispatch(reset());
    }

    if (user) {
      navigate("/");
    }
  }, [isError, message, user, isLoading]);

  return (
    <>
      <div style={{ marginTop: "150px" }}>
        {isLoading ? (
          <Loader />
        ) : (
          <Container className="w-50 authWidth shadow p-5">
            <Row>
              <h1 className="text-center">Sign Up</h1>
              <Col>
                <Form onSubmit={handleSubmit} style={{ borderRadius: "15px" }}>
                  <Avatar src={imagePrev} alt={"Error"} />
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      name="name"
                      value={formData.name}
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
        )}
      </div>
    </>
  );
};

export default Register;
