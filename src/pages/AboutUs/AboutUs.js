import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import aboutUsImage from "../../Images/pcBoy.jpg"; // Replace with your actual image file path

const AboutUs = () => {
  return (
    <Container style={{ marginTop: "150px" }}>
      <Row className="justify-content-center">
        <Col lg={8}>
          <h2 className="text-center mb-4">About Learnica</h2>
          <p>
            Welcome to Learnica, your go-to platform for online learning! At
            Learnica, we are passionate about providing high-quality and
            accessible online courses that empower individuals to enhance their
            skills and achieve their learning goals.
          </p>

          <p>
            Our journey started with a simple idea: to create a platform that
            brings together learners and educators from around the world.
            Whether you are looking to expand your knowledge in programming,
            design, business, or any other field, Learnica is the place for you.
          </p>

          <p>
            What sets Learnica apart is our commitment to fostering a vibrant
            learning community. We believe in the transformative power of
            education and the positive impact it can have on people's lives. Our
            platform is designed to facilitate engaging and interactive learning
            experiences, allowing students to connect with expert instructors
            and fellow learners.
          </p>

          <Row className="my-4">
            <Col md={6}>
              <Image src={aboutUsImage} alt="About Us" fluid rounded />
            </Col>
            <Col md={6}>
              <p>
                Our diverse range of courses covers everything from beginner to
                advanced levels. We collaborate with experienced instructors who
                are passionate about sharing their knowledge and expertise.
                Learnica is not just a platform for courses; it's a community of
                learners and educators working together to make learning an
                enriching and enjoyable experience.
              </p>
            </Col>
          </Row>

          <p>
            As you explore Learnica, you'll discover a user-friendly interface,
            responsive design, and a commitment to excellence in education. Join
            us on this educational journey, and let's learn, grow, and succeed
            together.
          </p>

          <p>
            Thank you for choosing Learnica. We look forward to being part of
            your learning adventures!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
