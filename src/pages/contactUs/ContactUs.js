import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Container, Row, Card, Button, Col } from "react-bootstrap";
import shahzaibFrontened from "../../Images/shahzaibFrontened.png";
import salman from "../../Images/salman.jpeg";
import mohsin from "../../Images/mohsin.jpg";

import { AiOutlineWhatsApp } from "react-icons/ai";

import { BiLogoGmail } from "react-icons/bi";
import DetailOfContact from "../../components/ContactUs/Mohsin";
const ContactUs = ({ aboutProfile }) => {
  const [showDetail, setShowDetail] = useState(false);
  const showDetailHandler = () => {
    setShowDetail(true);
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <Container>
        <div>
          <Row className="justify-content-center align-items-center">
            <div className="text-center">
              <h2>Our Team</h2>
              <p className="p-5">
                Our leadership team comes together with one goal: to help
                learners, organizations, and nations prepare for and strengthen
                the digital workforce of the next generation.
              </p>
            </div>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Card style={{ width: "18rem", margin: "10px" }}>
              <Card.Img
                variant="top"
                src={shahzaibFrontened}
                style={{ height: "265px" }}
              />
              <Card.Body className="text-center">
                <Card.Title>Shahzaib Sarwar</Card.Title>
                <Card.Text>
                  <p>Frontend Engineer @ Zapta Technologies</p>
                </Card.Text>
                <Link to="/shahzaib">
                  <Button variant="outline-success">About Me</Button>
                </Link>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "10px" }}>
              <Card.Img
                variant="top"
                src={salman}
                style={{ height: "265px" }}
              />
              <Card.Body className="text-center">
                <Card.Title>Salman Talat</Card.Title>
                <Card.Text>
                  <p>Documentation + Frontend Design</p>
                </Card.Text>
                <Link to="/salman">
                  <Button variant="outline-success">About Me</Button>
                </Link>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "10px" }}>
              <Card.Img
                variant="top"
                src={mohsin}
                style={{ height: "265px" }}
              />
              <Card.Body className="text-center">
                <Card.Title>Mohsin Shoaib</Card.Title>
                <Card.Text>
                  <p>Full-Stack Engineer @ Cogent Labs</p>
                </Card.Text>
                <Link to="/Mohsin">
                  <Button variant="outline-success">About Me</Button>
                </Link>
              </Card.Body>
            </Card>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
