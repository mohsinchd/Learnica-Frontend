import React from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Offcanvas,
  Navbar,
  Nav,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { SiSololearn } from "react-icons/si";

import InstructorGuideCards from "./InstructorGuideCards";

const InstructorMainPage = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container fluid style={{ marginTop: "150px" }}>
      <Row>
        <Col md={2} className="">
          <Button
            variant="primary"
            onClick={handleShow}
            className="text-success position-fixed"
          >
            Launch
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Close</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Navbar>
                <NavLink to="/">
                  <Navbar.Brand>
                    <SiSololearn size={25} className="text-success" /> LEARNICA
                  </Navbar.Brand>
                </NavLink>
              </Navbar>
              <Nav className="flex-column">
                <Nav.Link href="#student">Student</Nav.Link>
                <Link to="/instNewCourseForm">
                  <Nav.Link href="/instNewCourseForm">
                    Make a New Course
                  </Nav.Link>
                </Link>
                <Nav.Link href="#logout">Logout</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
        <Col md={8}>
          <h1>Courses</h1>
          <p>
            Considering our expertise, we believe the following resources might
            prove beneficial.
          </p>

          <p className=" ">
            From what we've learned, these resources seem like they could offer
            some valuable assistance. Considering what we know, exploring these
            resources might be a good idea. Based on our background, we think
            these resources could be helpful for you.
          </p>
          <Container className="">
            <Row className="my-5">
              <Col md={6}>
                <Link to="/instNewCourseForm">
                  <Button variant="success" className="w-50">
                    Add New Course
                  </Button>
                </Link>
              </Col>
            </Row>

            {/* cards */}
            <InstructorGuideCards />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default InstructorMainPage;
