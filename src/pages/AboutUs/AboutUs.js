import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import aboutUsImage from "../../Images/pcBoy.jpg"; // Replace with your actual image file path

const AboutUs = () => {
  return (
    <Container style={{ marginTop: "150px" }}>
      <Row>
        <Col>
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
                Discover a diverse spectrum of courses at Learnica, catering to
                everyone from beginners seeking foundational knowledge to
                advanced learners pursuing mastery. Our platform is fueled by
                collaboration with seasoned instructors, each driven by a
                passion for imparting their wealth of knowledge and expertise.
                At Learnica, we transcend the conventional notion of being a
                mere course provider. We've cultivated an immersive community
                where learners and educators synergize, creating an environment
                that goes beyond the ordinary. Together, we strive to redefine
                the learning experience, making it not just informative but also
                profoundly enriching and enjoyable. In this vibrant community,
                education is not confined to the exchange of information; it's a
                dynamic interaction that fosters collaboration, discussion, and
                growth. We believe that the collective journey of learners and
                educators is what truly elevates the learning process. By
                working together, we transform education into a shared
                adventure, where each participant contributes to the tapestry of
                knowledge. As you navigate the Learnica platform, you'll witness
                our commitment to fostering an inclusive and engaging
                atmosphere.
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
