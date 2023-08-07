import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
const Navigationbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setRegisterModal] = useState(false);

  return (
    <>
      <Navbar
        collapseOnSelect
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#">LEARNICA</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              // navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">our Business</Nav.Link>
              <NavDropdown
                title="categories"
                id="navbarScrollingDropdown"
                className="categories-heading"
              >
                <NavDropdown.Item href="#action3">Development</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Design</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Marketing</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex mx-lg-3 me-5 my-xs-4 my-lg-0">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

            <Button
              variant="outline-success me-2"
              onClick={() => setShowLoginModal(true)}
            >
              Login
            </Button>
            <Button
              variant="outline-success"
              onClick={() => setRegisterModal(true)}
            >
              Register
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Modal for the Login  */}
      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
        {/* Modal Footer */}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLoginModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal for the Register */}
      <Modal show={showRegisterModal} onHide={() => setRegisterModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register />
        </Modal.Body>
        {/* Modal Footer */}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setRegisterModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navigationbar;
