import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Description = ({ course }) => {
  return (
    <div style={{ marginTop: "81px" }}>
      <Container>
        <Row>
          <Col md={8}>
            <h1>Description</h1>
            <p>{course.description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Description;
