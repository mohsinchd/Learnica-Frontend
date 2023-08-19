import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";

import InstructorGuideCards from "./InstructorGuideCards";
const InstructorMainPage = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="text-center">
        <h1>Courses</h1>
        <p>
          Considering our expertise, we believe the following resources might
          prove beneficial.
        </p>
      </div>
      <Container className="">
        <Row className="mt-5">
          <Col md={6} className="d-flex flex-column  gap-3">
            <Button variant="success" className="w-50">
              {" "}
              Add New Course
            </Button>
            <Button variant="success" className="w-50">
              {" "}
              Edit course
            </Button>
          </Col>
          <Col md={6}>Blank</Col>
        </Row>
        <Row>
          <p className="text-center m-5" style={{ marginRig: "" }}>
            From what we've learned, these resources seem like they could offer
            some valuable assistance. Considering what we know, exploring these
            resources might be a good idea. Based on our background, we think
            these resources could be helpful for you.
          </p>
        </Row>

        {/* cards */}
        <InstructorGuideCards />
      </Container>
    </div>
  );
};

export default InstructorMainPage;
