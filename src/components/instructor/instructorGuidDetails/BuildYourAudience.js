import React from "react";

import { Container, Row, Accordion } from "react-bootstrap";
import AudienceCourse from "../../../Images/BuidYouAdudience.jpg";
import { Col } from "react-bootstrap";
import BackButton from "../../SharedComponents/BackButton";
import InstructorOffCanvas from "../InstructorOffCanvas";
const BuildYourAudience = () => {
  return (
    <div className="" style={{ marginTop: "150px" }}>
      <Container>
        <Row>
          <Col md={2}>
            <InstructorOffCanvas />
          </Col>
          <Col md={8}>
            <div className="text-center">
              <img src={AudienceCourse} alt="createcourseimage " />
            </div>
            <h1 className="text-center mt-5">Build Your Audience ! </h1>
            <h5 className="mt-4">
              It's important to make sure your course is engaging for your
              students with a well-structured, practical, and rewarding learning
              experience. The most successful instructors spend time planning
              their course content before they start recording to ensure their
              course helps students achieve clear goals.
            </h5>
            <div className="mt-5">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Step 1: Choose your course topic.
                  </Accordion.Header>
                  <Accordion.Body>
                    Pick something you're knowledgeable in and genuinely excited
                    about teaching. Learn more about Learnica's Marketplace
                    Insights tool that helps you understand the demand and
                    competition for your chosen topic.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {" "}
                    Step 2: Define your intended learners and your course’s
                    learning objectives.
                  </Accordion.Header>
                  <Accordion.Body>
                    Pick something you're knowledgeable in and genuinely excited
                    about teaching. Learn more about Learnica's Marketplace
                    Insights tool that helps you understand the demand and
                    competition for your chosen topic.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    {" "}
                    Step 2: Define your intended learners and your course’s
                    learning objectives.
                  </Accordion.Header>
                  <Accordion.Body>
                    Pick something you're knowledgeable in and genuinely excited
                    about teaching. Learn more about Learnica's Marketplace
                    Insights tool that helps you understand the demand and
                    competition for your chosen topic.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Step 3: Decide how students will practice what you’re
                    teaching.
                  </Accordion.Header>
                  <Accordion.Body>
                    Pick something you're knowledgeable in and genuinely excited
                    about teaching. Learn more about Learnica's Marketplace
                    Insights tool that helps you understand the demand and
                    competition for your chosen topic.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Step 4: Create your course outline.
                  </Accordion.Header>
                  <Accordion.Body>
                    Pick something you're knowledgeable in and genuinely excited
                    about teaching. Learn more about Learnica's Marketplace
                    Insights tool that helps you understand the demand and
                    competition for your chosen topic.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    Step 5: Script your course.
                  </Accordion.Header>
                  <Accordion.Body>
                    Pick something you're knowledgeable in and genuinely excited
                    about teaching. Learn more about Learnica's Marketplace
                    Insights tool that helps you understand the demand and
                    competition for your chosen topic.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <h4 className="text-center mt-5">FAQs</h4>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What are the components of a course?
                  </Accordion.Header>
                  <Accordion.Body>
                    A Learnica course can consist of a combination of videos,
                    slides, text, quizzes, coding exercises, assignments, and
                    practice tests. You can also add additional resources to
                    your course, including: PDFs, links, audio files, etc. These
                    components are structured into sections and lectures
                    (sections are groups of lectures).
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How long should my course be?
                  </Accordion.Header>
                  <Accordion.Body>
                    The only length requirement for a course is that it must be
                    at least 30 minutes. Your course should be as long as it
                    takes to fully teach your topic and allow your students to
                    achieve the course goals. If you’re unsure, you can also
                    take a look at other courses in your category to get a sense
                    for the average course length of similar courses.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How much time does it take to create a course?
                  </Accordion.Header>
                  <Accordion.Body>
                    Course creation time varies greatly depending on the length
                    of the course and an instructor's time commitment. Many of
                    our instructors complete their courses in 30-45 days.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Do students want quizzes, assignments, and worksheets?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes! Learnica students love to practice and apply what they
                    are learning. Practice activities can be anything that makes
                    a student apply their learning, not just quizzes or
                    worksheets. Udemy gives you tools to create quizzes,
                    practice tests, coding exercises, and assignments in your
                    course.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Are there any course requirements? What are they?
                  </Accordion.Header>
                  <Accordion.Body>
                    Courses must contain at least 30 minutes of content, include
                    at least 5 separate lectures, and videos must be HD quality.
                    See here for a complete list of the minimum course
                    requirements.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <BackButton />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BuildYourAudience;
