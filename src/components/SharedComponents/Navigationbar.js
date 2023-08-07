import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
const Navigationbar = (event) => {
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
          <Link to="/">
            <Navbar.Brand href="#">LEARNICA</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              // navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Login">Instruct </Nav.Link>
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

            <Link to="/Login">
              <Button variant="outline-success me-2">Login</Button>
            </Link>
            <Link to="/Register">
              <Button variant="outline-success">Register</Button>{" "}
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
