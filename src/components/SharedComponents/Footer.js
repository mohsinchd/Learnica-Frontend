import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SiSololearn } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
// import { MdOutgoingMail } from "react-icons/bs";
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

              <li>About</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col md={3} className="mt-3 mt-lg-0">
            <h3 className="text-light">Contact Us</h3>
            <p>
              {" "}
              <BiLogoGmail size={25} /> shahzaib6915@gmail.com
            </p>
            <p>
              {" "}
              <BsFillTelephoneFill size={25} /> 0300 1112986
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
