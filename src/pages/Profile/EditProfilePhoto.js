import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import toast from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, reset } from "../../redux/reducers/user/userSlice";

import Loader from "../../components/SharedComponents/Loader";

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

  return (
    <div style={{ paddingTop: "150px" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container className="w-50 m-auto authWidth">
          <Row>
            <Col>
              <h1>Profile Picture</h1>
              <ProfilePhotoUpdate />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ProfilePhoto;
