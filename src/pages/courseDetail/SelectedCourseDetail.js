import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BasicCourseDetail from "./BasicCourseDetail";
import CourseContent from "./CourseContent";
import Description from "./Description";
import InstructorAbout from "./InstructorAbout";
import Loader from "../../components/SharedComponents/Loader";

import { getCourseDetails } from "../../redux/reducers/userSideCourses/userSideCoursesSlice";
import UserReviews from "./UserReviews";

const SelectedCourseDetail = () => {
  const { id } = useParams();

  const { isLoadingDetails, courseDetails } = useSelector(
    (state) => state.userSideCourses
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseDetails(id));
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      {isLoadingDetails || !courseDetails ? (
        <Loader />
      ) : (
        <>
          <BasicCourseDetail course={courseDetails} />
          <CourseContent course={courseDetails} />
          <Description course={courseDetails} />
          <InstructorAbout course={courseDetails} />
          <UserReviews course={courseDetails} />
        </>
      )}
    </div>
  );
};

export default SelectedCourseDetail;
