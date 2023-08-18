import React from "react";
import { Button, Card, Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import BuildYourAudience from "../../Images/BuidYouAdudience.jpg";
import getStartedWithVideo from "../../Images/getStartedWithVideo.jpg";
import EngagingCourse from "../../Images/EngagingCourse.jpg";
import NewInstructorChallenge from "../../Images/NewInstructorChallenge.jpg";
const InstructorGuideCards = () => {
  return (
    <Container>
      <div className="d-flex flex-column gap-5">
        <Card className="text-center">
          <div className="d-flex gap-5 p-5 flex-wrap justify-content-center">
            <Card.Img
              variant="top"
              src={EngagingCourse}
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="mx-5">
              <Card.Title className="h5 text-center">
                Creating an Intriguing Course
              </Card.Title>
              <Card.Text className="mt-4">
                Regardless of your experience level – whether you're a seasoned
                educator or stepping into the teaching role for the first time –
                you have the ability to design an interesting course. We've
                gathered materials and top-notch strategies to propel your
                teaching journey forward, regardless of your current starting
                point.
              </Card.Text>
              <Link to="/inst-page/create-course">
                <Button variant="outline-success" className="w-100">
                  {" "}
                  Get Started
                </Button>
              </Link>
            </Card.Body>
          </div>
        </Card>
        <Row>
          <Col md={6}>
            <Card>
              <div className="d-flex flex-wrap justify-content-center">
                <Card.Img
                  variant="top"
                  src={getStartedWithVideo}
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="mx-5">
                  <Card.Title className="h5 text-center">
                    Get started with video
                  </Card.Title>
                  <Card.Text className="mt-4">
                    Quality video lectures can set your course apart. Use our
                    resources to learn the basics.
                  </Card.Text>
                  <Link to="/inst-page/startWithVideo">
                    <Button variant="outline-success" className="w-100">
                      {" "}
                      Get Started
                    </Button>
                  </Link>
                </Card.Body>
              </div>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <div className="d-flex  p-2 flex-wrap justify-content-center">
                <Card.Img
                  variant="top"
                  src={BuildYourAudience}
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="mx-5">
                  <Card.Title className="h5 text-center">
                    Buidl your Audience
                  </Card.Title>
                  <Card.Text className="mt-4">
                    Set your course up for success by building your audience.
                  </Card.Text>
                  <Link to="/inst-page/BuidAudience">
                    <Button variant="outline-success" className="w-100">
                      {" "}
                      Get Started
                    </Button>
                  </Link>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
        <Card>
          <div className="d-flex gap-5 p-5 flex-wrap justify-content-center ">
            <Card.Img
              variant="top"
              src={NewInstructorChallenge}
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <Card.Body className="mx-5">
              <Card.Title className="h5 text-center">
                Join ! As Instructor Callenge
              </Card.Title>
              <Card.Text className="mt-4">
                Regardless of your experience level – whether you're a seasoned
                educator or stepping into the teaching role for the first time –
                you have the ability to design an interesting course. We've
                gathered materials and top-notch strategies to propel your
                teaching journey forward, regardless of your current starting
                point.
              </Card.Text>
              <Link to="/inst-page/instChallenge">
                <Button variant="outline-success" className="w-100">
                  {" "}
                  Get Started
                </Button>
              </Link>
            </Card.Body>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default InstructorGuideCards;
