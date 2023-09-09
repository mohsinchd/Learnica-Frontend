import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CourseContentShow from "../../components/CoursePlayer/CourseContentShow";
import CourseVideoPlayer from "../../components/CoursePlayer/CourseVideoPlayer";

import PlayCourseDetail from "../../components/CoursePlayer/PlayCourseDetail";
const EnrolledCoursePlayer = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  const onVideoSelect = (videoUrl) => {
    setVideoUrl(videoUrl);
  };
  return (
    <div style={{ marginTop: "150px" }}>
      <Container>
        <Row>
          <Col md={8}>
            <CourseVideoPlayer videoUrl={videoUrl} />
            <PlayCourseDetail />
          </Col>
          <Col md={4}>
            <CourseContentShow onVideoSelect={onVideoSelect} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EnrolledCoursePlayer;
