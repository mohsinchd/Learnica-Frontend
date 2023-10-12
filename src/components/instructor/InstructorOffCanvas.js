import React from "react";
import { Button, Offcanvas, Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { SiSololearn } from "react-icons/si";
const InstructorOffCanvas = () => {
  // Instructor canvas
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
          <Offcanvas.Title>
            <Navbar>
              <NavLink to="/">
                <Navbar.Brand>
                  <SiSololearn size={25} className="text-success" /> LEARNICA
                </Navbar.Brand>
              </NavLink>
            </Navbar>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link>
              <Link to="/">Become a Student</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/instNewCourseForm">Make a New Course</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/instructor/courses">View Your Courses</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/instructor/analytics">View Analytics</Link>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default InstructorOffCanvas;
