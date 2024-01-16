import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../redux/reducers/auth/authSlice";
import { reset } from "../../redux/reducers/auth/authSlice";
import Loader from "../../components/SharedComponents/Loader";

const ResetPassword = () => {
  const { token } = useParams();

  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isLoading, message, isError } = useSelector((state) => state.auth);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!newPassword) {
      return toast.error("New Password is Required.");
    }

    dispatch(resetPassword({ token, newPassword }));
  };

  useEffect(() => {
    if (message && isError) {
      toast.error(message);
      dispatch(reset());
    }

    if (message && !isError) {
      toast.success(message);
      navigate("/Login");
      dispatch(reset());
    }
  }, [message, isError, dispatch]);

  return (
    <div style={{ paddingTop: "150px" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container className="w-50 lh-lg p-5 rounded">
          <Row>
            <Col className="text-center">
              <h2> Reset PASSWRORD</h2>
              <p>Please enter your new password.</p>

              <Form onSubmit={submitHandler}>
                <Form.Group controlId="password">
                  <Form.Control
                    type="password"
                    placeholder="New Password"
                    name="password"
                    className="mb-3"
                    onChange={(e) => setNewPassword(e.target.value)}
                    value={newPassword}
                  />
                </Form.Group>
                <Button variant="success" type="submit">
                  Reset Password{" "}
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

export default ResetPassword;
