import React from "react";
import { MdOutgoingMail } from "react-icons/md";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Accordion,
} from "react-bootstrap";
import mohsin from "../../Images/mohsin.jpg";
import BackButton from "../SharedComponents/BackButton";
const Mohsin = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col className="text-center">
            <Image
              src={mohsin}
              alt="shahzaib"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "200px", maxHeight: "200px" }} // Adjust the image size here
            />
            <h2>Mohsin Shoaib</h2>
            <p>Full-Stack Engineer @ Cogent Labs</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>About Me </Accordion.Header>
                <Accordion.Body>
                  I'm Mohsin Shoaib, a skilled Backened engineer with a passion
                  for crafting user-friendly web applications. With extensive
                  experience, I've contributed to projects like Learnica,
                  showcasing my expertise in Backend development.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>My Exprtise </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React-Js </li>
                    <li>React-Bootstrap</li>
                    <li>React-Router</li>
                    <li>Redux</li>
                    <li>Redux-toolkit</li>
                    <li>axios</li>
                    <li>Node-js</li>
                    <li>Express-js</li>
                    <li>Javascript</li>
                    <li>MongoDB </li>
                    <li>Cloudinary</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Why i'm using Node-js Runtiem{" "}
                </Accordion.Header>
                <Accordion.Body>
                  I chose Nodejs for my project because it simplifies website
                  development by breaking it into smaller, manageable pieces,
                  like assembling a puzzle. This approach made it easier to
                  create a polished and responsive user interface, ensuring that
                  the project looks good and works smoothly. React.js also has a
                  helpful community, offering support and resources, which made
                  it an ideal choice for my project, ultimately enhancing the
                  overall user experience and delivering a top-notch final
                  product.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Why Node-js is best from other ?{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <strong>Fit with React</strong>
                    </li>
                    <li>
                      <strong>Easy to integrate</strong>
                    </li>
                    <li>
                      <strong>Easy for Beginners ! </strong>
                    </li>
                    <li>
                      <strong>Proven and Truested </strong>
                    </li>
                    <li>
                      <strong>user friendly components </strong>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  What i do in FYP ( LEARNICA )?{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    In my FYP, I focused on the Backened, using React.js to
                    create an intuitive user interface. I employed Bootstrap for
                    responsive design and Redux for efficient state management.
                    Emphasis was on accessibility and responsive design,
                    ensuring a user-friendly experience.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Which problem i face during Project ?
                </Accordion.Header>
                <Accordion.Body>
                  <li>Browser Compatibility</li>
                  <li>Responsive Design</li>
                  <li>Performance Optimization</li>
                  <li>Code Maintainability</li>
                  <li>Managing state</li>
                  <li>Version Control issues</li>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>How You Can Contact Me? </Accordion.Header>
                <Accordion.Body>
                  <p>
                    "Feel free to reach out to me anytime for discussions or
                    questions about any technology. I'm here to help and chat
                    whenever you'd like!"
                  </p>
                  <p>
                    <MdOutgoingMail size={25} />{" "}
                    <a href="mailto:mohsinshoaib735@gmail.com" target="_blank">
                      Email Me
                    </a>
                  </p>
                  <p>
                    <BiLogoWhatsappSquare size={25} /> 03082515258
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <BackButton />
      </Container>
    </div>
  );
};

export default Mohsin;
