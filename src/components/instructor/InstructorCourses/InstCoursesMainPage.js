import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import {
  deleteCourse,
  getInstCourses,
  reset,
} from "../../../redux/reducers/instructor/instructorSlice";
import Loader from "../../SharedComponents/Loader";
import InstCoursesTable from "./InstCoursesTable";
import toast from "react-hot-toast";

const InstCoursesMainPage = () => {
  const { isLoading, errorMessage, message, isError, courses } = useSelector(
    (state) => state.instructor
  );

  const dispatch = useDispatch();

  const deleteCourseHandler = (id) => {
    dispatch(deleteCourse(id));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(reset());
    }

    if (isError && errorMessage) {
      toast.error(errorMessage);
      dispatch(reset());
    }

    dispatch(getInstCourses());
  }, [message, isError, errorMessage, dispatch]);

  return (
    <div style={{ marginTop: "150px" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <h1>Your Courses.</h1>
          <InstCoursesTable courses={courses} onDelete={deleteCourseHandler} />
        </Container>
      )}
    </div>
  );
};

export default InstCoursesMainPage;
