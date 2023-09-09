import React from "react";
import { Row } from "react-bootstrap";

const PlayCourseDetail = ({ course }) => {
  return (
    <Row>
      <h2>About Course</h2>
      <p>{course.description}</p>

      <p>Total Sections : {course.sections.length}</p>
      <p>
        Total Lectures :{" "}
        {course.sections.reduce(
          (acc, section) => acc + section.lectures.length,
          0
        )}
      </p>

      <div>
        <img
          src={course.instructor.avatar.url}
          alt="no image"
          className="img-fluid rounded-circle border border-primary mb-3"
          style={{ height: 180, width: 180, objectFit: "cover" }}
        />
        <h5>Created By : {course.instructor.name}</h5>
        <h5>Email: {course.instructor.email}</h5>
      </div>
    </Row>
  );
};

export default PlayCourseDetail;
