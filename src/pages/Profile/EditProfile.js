import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import toast from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/reducers/user/userSlice";

import UserProfile from "../../components/ProfileComponents/UserProfile";
import Loader from "../../components/SharedComponents/Loader";
import EnrolledCourses from "../../components/ProfileComponents/EnrolledCourses";

const EditProfile = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError && message) {
      toast.error(message);
    }

    if (isSuccess && message) {
      toast.success(message);
    }

    dispatch(getUserInfo());
  }, [isError, isSuccess, message]);
  // console.log(user);
  return (
    <div style={{ paddingTop: "150px" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container className="w-50 m-auto authWidth">
          <Row>
            <Col>
              <h1>User Profile</h1>
              <UserProfile user={user} />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default EditProfile;
