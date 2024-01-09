import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SiSololearn } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
// import { MdOutgoingMail } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className=" mt-5 p-5 bg-dark text-light  footer ">
        <Container>
          <Row>
            <Col md={6}>
              <h3>
                {" "}
                <SiSololearn size={25} className="text-success" />{" "}
                <span className="text-light">LEARNICA</span>{" "}
              </h3>
              <p>
                Learnica empowers learners with diverse, high-quality courses
                for students, professionals, and lifelong learners. <br /> Join
                our vibrant community, embark on a journey of discovery, and
                enhance your expertise with engaging educational content. <br />{" "}
              </p>
            </Col>
            <Col md={3}>
              <h3 className="text-light">Links</h3>
              <ul className="list-unstyled  mb-0 ">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/about-us">
                  <li>About Us</li>
                </Link>

                <Link to="/contact-us">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </Col>
            <Col md={3} className="mt-3 mt-lg-0">
              <h3 className="text-light">Contact Us</h3>
              <p>
                {" "}
                <BiLogoGmail size={20} /> shahzaib6915@gmail.com
              </p>
              <p>
                {" "}
                <BsFillTelephoneFill size={16} /> +92300-1112986
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="bg-primary p-3 text-center">
        <p className="mb-0 text-light">
          Learnica | &copy; All Rights Reserved. {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
};

export default Footer;
