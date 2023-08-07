import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer className="mt-5 bg-dark text-light p-5 footer">
      <Container>
        <Row>
          <Col md={6}>
            <h3>About LEARNICA </h3>
            <p>Learnica is the best place for the online Learning Platform</p>
          </Col>
          <Col md={3}>
            <h2>Links</h2>
            <ul className="list-unstyled  mb-0 ">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="mt-3 mt-lg-0">
            <h3>Contact Us</h3>
            <p>Email: shahzaib6915....</p>
            <p>Phone: 0300 11129...</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;