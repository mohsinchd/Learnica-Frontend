import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Description = ({ course }) => {
  return (
    <div className="my-2">
      <Container>
        <Row>
          <Col md={8}>
            <div dangerouslySetInnerHTML={{ __html: course.description }}></div>
            {/* <p>{course.description}</p> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Description;
