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
                Welcome to Learnica, where knowledge meets innovation! At
                Learnica, our mission is to empower learners from all walks of
                life with high-quality, diverse, and engaging educational
                content. Whether you're a student, professional, or lifelong
                learner, our platform offers a rich tapestry of courses designed
                to inspire and challenge. Embark on a journey of discovery,
                acquire new skills, and enhance your expertise with Learnica.
                Join our community of learners and educators today, and let's
                navigate the exciting world of learning together!
              </p>
            </Col>
            <Col md={3}>
              <h2 className="text-light">Links</h2>
              <ul className="list-unstyled  mb-0 ">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About</li>
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
                <BiLogoGmail size={25} /> shahzaib6915@gmail.com
              </p>
              <p>
                {" "}
                <BsFillTelephoneFill size={25} /> +92300-1112986
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
