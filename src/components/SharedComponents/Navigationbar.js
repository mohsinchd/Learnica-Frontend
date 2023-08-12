import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { SiSololearn } from "react-icons/si";

import { useSelector, useDispatch } from "react-redux";

import { logout, reset } from "../../redux/reducers/auth/authSlice";
import { toast } from "react-hot-toast";

const Navigationbar = () => {
  const { user, logoutMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (logoutMessage) {
      console.log(true);
      toast.success(logoutMessage);
      dispatch(reset());
    }
  }, [logoutMessage, dispatch]);

  return (
    <>
      <Navbar
        collapseOnSelect
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        fixed="top"
        navbar="dark"
        className="text-info"
      >
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <SiSololearn size={25} className="text-success" /> LEARNICA
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              // navbarScroll
            >
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
            <Form className="d-flex me-2 mb-2">
              <Form.Control
                className="text-dark search-input"
                type="search"
                size="sm"
                placeholder="Search"
              />
              <Button variant="outline-success" size="sm">
                Search
              </Button>
            </Form>

            {user ? (
              <Button
                onClick={() => dispatch(logout())}
                variant="outline-success mb-2"
                size="sm"
              >
                Logout
              </Button>
            ) : (
              <>
                <Link to="/Login">
                  <Button variant="outline-success me-2 mb-2" size="sm">
                    Login
                  </Button>
                </Link>
                <Link to="/Register">
                  <Button variant="outline-success mb-2" size="sm">
                    Register
                  </Button>{" "}
                </Link>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
