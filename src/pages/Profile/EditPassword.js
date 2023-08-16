import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import toast from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/SharedComponents/Loader";
import EnrolledCourses from "../../components/ProfileComponents/EnrolledCourses";
import PasswordUpdate from "../../components/ProfileComponents/PasswordUpdate";
import { reset } from "../../redux/reducers/user/userSlice";

const EditPassword = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }

    if (isSuccess && message) {
      toast.success(message);
      dispatch(reset());
    }
  }, [isError, isSuccess, message]);

  return (
    <div style={{ paddingTop: "150px" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <Row>
            <Col md={4}>
              <h1>Update Password</h1>
              <PasswordUpdate />
            </Col>
            <Col md={8}>
              <h1>Enrolled Courses</h1>
              <EnrolledCourses courses={user.enrolledCourses} />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default EditPassword;
