import React from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import Rating from "../../components/SharedComponents/Rating";

const BasicCourseDetail = ({ course }) => {
  return (
    <div
      className=" text-white"
      style={{ backgroundColor: "#2d2f31", padding: "30px", height: "300px" }}
    >
      <Container>
        <Row>
          <Col md={8} className="">
            <h1 className="text-white mb-2">{course.title}</h1>
            <div className="headline mb-3 ">
              The most advanced and modern course on the internet: master
              required skills, and so much more sex.
            </div>
            <div className="mb-2">
              <Rating
                value={course.averageRating}
                text={`${course.numOfReviews} reviews`}
              />
            </div>
            <div>
              <p>Created By : {course.instructor.name}</p>
            </div>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Img variant="top" src={course.poster.url} />
              <Card.Body className="">
                <h1>${course.price}</h1>
                <Button
                  variant="outline-success"
                  className="w-100"
                  style={{ marginBottom: "3px" }}
                >
                  Add to Cart
                </Button>
                <Button variant="outline-success" className="w-100">
                  Buy Now
                </Button>
                <span>30 days-money back gurantee</span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BasicCourseDetail;
