import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Avatar from "../../components/SharedComponents/Avatar";

const InstructorAbout = ({ course }) => {
  return (
    <div>
      <Container>
        <h1>Instructor</h1>
        <Row>
          <Col md={8}>
            <div>
              {/* <Avatar src={course.instructor.avatar.url} alt="" /> */}
              <img
                src={course.instructor.avatar.url}
                alt="no image"
                className="img-fluid rounded-circle border border-primary mb-3"
                style={{ height: 180, width: 180, objectFit: "cover" }}
              />
              <h5>Name : {course.instructor.name}</h5>
              <h5>Email: {course.instructor.email}</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InstructorAbout;
