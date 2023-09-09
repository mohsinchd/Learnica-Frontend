import React from "react";
import { Row } from "react-bootstrap";
const PlayCourseDetail = () => {
  return (
    <Row>
      <h2>About Course</h2>
      <p>
        Learn web design in 1 hour with 25+ simple-to-use rules and guidelines —
        tons of amazing web design resources included!
      </p>

      <p>Total Sections : .....</p>
      <p>Total Lectures : .....</p>

      <div>
        <img
          src=""
          alt="no image"
          className="img-fluid rounded-circle border border-primary mb-3"
          style={{ height: 180, width: 180, objectFit: "cover" }}
        />
        <h5>Created By : ......</h5>
        <h5>Email: ....</h5>
      </div>
    </Row>
  );
};

export default PlayCourseDetail;
