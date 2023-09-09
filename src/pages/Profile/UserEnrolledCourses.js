import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import EnrolledCourses from "../../components/ProfileComponents/EnrolledCourses";
import Loader from "../../components/SharedComponents/Loader";

import { getAllEnrolledCourses } from "../../redux/reducers/userSideCourses/userSideCoursesSlice";

const UserEnrolledCourses = () => {
  const dispatch = useDispatch();
  const { isLoading, enrolledCourses } = useSelector(
    (state) => state.userSideCourses
  );

  useEffect(() => {
    dispatch(getAllEnrolledCourses());
  }, []);

  return (
    <div style={{ marginTop: "150px" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <h1>Enrolled Courses</h1>
          <EnrolledCourses courses={enrolledCourses} />
        </Container>
      )}
    </div>
  );
};

export default UserEnrolledCourses;
