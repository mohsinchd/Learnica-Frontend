import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import { getInstCourses } from "../../../redux/reducers/instructor/instructorSlice";
import Loader from "../../SharedComponents/Loader";
import InstCoursesTable from "./InstCoursesTable";

const InstCoursesMainPage = () => {
  const { isLoading, courses } = useSelector((state) => state.instructor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInstCourses());
  }, []);

  return (
    <div style={{ marginTop: "150px" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <h1>Your Courses.</h1>
          <InstCoursesTable courses={courses} />
        </Container>
      )}
    </div>
  );
};

export default InstCoursesMainPage;
