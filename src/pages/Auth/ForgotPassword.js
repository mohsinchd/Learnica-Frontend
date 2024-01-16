import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import { forgotPassword, reset } from "../../redux/reducers/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Loader from "../../components/SharedComponents/Loader";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const { isLoading, message, isError } = useSelector((state) => state.auth);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Email is Required.");
    }

    dispatch(forgotPassword({ email }));
  };

  useEffect(() => {
    if (message && isError) {
      toast.error(message);
      dispatch(reset());
    }

    if (message && !isError) {
      toast.success(message);
      dispatch(reset());
    }
  }, [message, isError, dispatch]);

  return (
    <div style={{ paddingTop: "150px" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container className="w-50 lh-lg  p-5 rounded">
          <Row>
            <Col className="text-center">
              <h2> Forgot PASSWRORD</h2>
              <p>
                Please provide the email address you used when you signed up for
                our LEARNICA account.
              </p>

              <Form onSubmit={submitHandler}>
                <Form.Group controlId="forEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    className="mb-3"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Form.Group>
                <Button variant="success" type="submit">
                  Send email{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ForgotPassword;
