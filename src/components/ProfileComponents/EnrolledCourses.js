import React from "react";

const EnrolledCourses = ({ courses }) => {
  // console.log(courses);
  return <div>{courses.length === 0 && <h3>No Enrolled Courses.</h3>}</div>;
};

export default EnrolledCourses;
