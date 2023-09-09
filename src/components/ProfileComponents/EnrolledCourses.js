import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../SharedComponents/Rating";

const EnrolledCourses = ({ courses }) => {
  return (
    <div>
      {courses.length === 0 && <h3>You are not enrolled in any course.</h3>}
      <Row>
        {courses.map((course) => (
          <Col md={4} key={course._id}>
            <Card>
              <Card.Img variant="top" src={course.poster.url} />
              <Card.Body>
                <h4>{course.title}</h4>
                <Rating
                  value={course.averageRating}
                  text={`${course.numOfReviews} reviews`}
                />
                <Link to={`/user-enrolledCourses/${course._id}`}>
                  <Button variant="success" className="mt-2">
                    Start
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EnrolledCourses;
