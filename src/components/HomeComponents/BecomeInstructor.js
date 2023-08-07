import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import instsecond from "../../Images/instsecond.jpg";
const BecomeInstructor = () => {
  return (
    <Container className="p-5">
      <Row>
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center p-5 text-center"
        >
          <h1>Embrace the position of Mentor</h1>
          <p style={{ lineHeight: "2" }}>
            Millions of students on Learnica are guided by instructors
            worldwide, as we equip them with the necessary tools and knowledge
            to teach subjects they are passionate about.
            <br />
            On Learnica, instructors hailing from various countries impart
            knowledge to millions of students, empowering them with the
            necessary resources and competencies to teach their passions.
          </p>
          <Button variant="outline-success ">Join As a Instructor</Button>
        </Col>
        <Col md={6} className="p-5">
          <img
            src={instsecond}
            alt="instructor"
            className="img-fluid inst-img"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BecomeInstructor;
