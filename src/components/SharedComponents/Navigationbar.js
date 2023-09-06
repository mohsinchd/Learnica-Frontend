import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SiSololearn } from "react-icons/si";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../redux/reducers/auth/authSlice";
import { toast } from "react-hot-toast";
import { NavLink, useNavigate, createSearchParams } from "react-router-dom";
import UserProfileDropdown from "../AuthComponents/UserProfileDropdown";
import SmallLoader from "./SmallLoader";

const Navigationbar = () => {
  const [keyword, setKeyword] = useState("");

  const { user, logoutMessage, isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (logoutMessage) {
      console.log(true);
      toast.success(logoutMessage);
      dispatch(reset());
    }
  }, [logoutMessage, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!keyword) {
      return toast.error("Please Enter your search keyword before searching.");
    }

    let param = {
      keyword,
    };

    navigate({
      pathname: "/search-courses",
      search: `${createSearchParams(param)}`,
    });
    setKeyword("");
  };

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
          <NavLink to="/">
            <Navbar.Brand>
              <SiSololearn size={25} className="text-success" /> LEARNICA
            </Navbar.Brand>
          </NavLink>
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
            <Form
              onSubmit={(e) => e.preventDefault()}
              className="d-flex me-2 mb-2"
            >
              <Form.Control
                className="text-dark search-input"
                type="search"
                size="sm"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search"
              />
              <Button
                onClick={submitHandler}
                variant="outline-success"
                size="sm"
                type="submit"
              >
                Search
              </Button>
            </Form>
            {isLoading ? (
              <>
                <SmallLoader />
              </>
            ) : user ? (
              <UserProfileDropdown />
            ) : (
              <>
                <NavLink to="/Login">
                  <Button variant="outline-success me-2 mb-2" size="sm">
                    Login
                  </Button>
                </NavLink>
                <NavLink to="/Register">
                  <Button variant="outline-success mb-2" size="sm">
                    Register
                  </Button>{" "}
                </NavLink>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
