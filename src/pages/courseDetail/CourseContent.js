import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { VscDebugContinue } from "react-icons/vsc";

const CourseContent = ({ course }) => {
  const totalSections = course.sections.length;
  const totalLectures = course.sections.reduce(
    (acc, section) => acc + section.lectures.length,
    0
  );

  return (
    <div style={{ marginTop: "100px" }}>
      <Container>
        <h1>Course Content</h1>
        <p>Total sections: {totalSections}</p>
        <p>Total Lectures: {totalLectures} </p>

        <Row>
          <Col md={8}>
            {course.sections.map((section) => {
              return (
                <>
                  <Accordion key={section._id}>
                    <Accordion.Item>
                      <Accordion.Header>{section.title}</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          {section.lectures.length === 0 && (
                            <li className="list-group-item">
                              No Lectures Available for this Section.
                            </li>
                          )}
                          {section.lectures.map((lecture) => (
                            <li className="list-group-item" key={lecture._id}>
                              <VscDebugContinue className="mx-3" />
                              {lecture.title}
                            </li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseContent;
