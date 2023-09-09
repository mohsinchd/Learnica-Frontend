import React from "react";

import { VscDebugContinue } from "react-icons/vsc";
import { Accordion, ListGroup } from "react-bootstrap";

const CourseContentShow = ({ course, onVideoSelect }) => {
  const selectVideoHandler = (url) => {
    onVideoSelect(url);
  };

  return (
    <div>
      {course.sections.map((section) => (
        <Accordion key={section._id}>
          <Accordion.Header>{section.title}</Accordion.Header>
          <Accordion.Body>
            <ListGroup variant="flush">
              {section.lectures.length === 0 && <p>No Lectures.</p>}
              {section.lectures.map((lecture) => (
                <ListGroup.Item
                  key={lecture._id}
                  onClick={() => selectVideoHandler(lecture.video.url)}
                  className="py-3 pointer hover"
                >
                  <VscDebugContinue className="mx-3" />
                  {lecture.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion>
      ))}
    </div>
  );
};

export default CourseContentShow;
