import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import toast from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/reducers/user/userSlice";

import Loader from "../../components/SharedComponents/Loader";
import EnrolledCourses from "../../components/ProfileComponents/EnrolledCourses";
import ProfilePhotoUpdate from "../../components/ProfileComponents/ProfilePhotoUpdate";
const ProfilePhoto = () => {
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
  console.log(user);
  return (
    <div style={{ paddingTop: "150px" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <Row>
            <Col md={4}>
              <h1>User Profile</h1>

              <ProfilePhotoUpdate />
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

export default ProfilePhoto;
