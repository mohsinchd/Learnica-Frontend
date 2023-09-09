import React from "react";
import { courseData } from "../../CourseData/courseData";

import { VscDebugContinue } from "react-icons/vsc";
import { Accordion } from "react-bootstrap";

const CourseContentShow = ({ onVideoSelect }) => {
  const handleVideoPath = (videoPath) => {
    onVideoSelect(videoPath);
  };

  const data2 = courseData.map((section, index) => {
    return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey={index}>
          <Accordion.Header>{section.secName}</Accordion.Header>
          {section.secContent.map((item, itemIndex) => {
            return (
              <>
                <div key={itemIndex}>
                  {Object.keys(item).map((property, propertyIndex) => {
                    return (
                      <Accordion.Body key={propertyIndex}>
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => handleVideoPath(item[property])}
                        >
                          <VscDebugContinue className="mx-1" />
                          {property}
                        </p>
                      </Accordion.Body>
                    );
                  })}
                </div>
              </>
            );
          })}
        </Accordion.Item>
      </Accordion>
    );
  });

  return <div>{data2}</div>;
};

export default CourseContentShow;
