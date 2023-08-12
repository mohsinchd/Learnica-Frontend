import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SiSololearn } from "react-icons/si";
const Footer = () => {
  return (
    <footer className=" mt-5 p-5 bg-dark text-light  footer ">
      <Container>
        <Row>
          <Col md={6}>
            <h3>
              {" "}
              <SiSololearn size={25} className="text-success" />{" "}
              <span className="text-light">LEARNICA</span>{" "}
            </h3>
            <p>Learnica is the best place for the online Learning Platform</p>
          </Col>
          <Col md={3}>
            <h2 className="text-light">Links</h2>
            <ul className="list-unstyled  mb-0 ">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/Login">
                <li>Login</li>
              </Link>
              <Link to="/Register">
                <li>Register</li>
              </Link>

              <li>About</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col md={3} className="mt-3 mt-lg-0">
            <h3 className="text-light">Contact Us</h3>
            <p>Email: shahzaib6915....</p>
            <p>Phone: 0300 11129...</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
