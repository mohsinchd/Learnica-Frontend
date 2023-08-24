import React from "react";
import { Button, Offcanvas, Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { SiSololearn } from "react-icons/si";
const InstructorOffCanvas = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
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
              <Nav.Link href="/instNewCourseForm">Make a New Course</Nav.Link>
            </Link>
            <Nav.Link href="#logout">Logout</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default InstructorOffCanvas;
