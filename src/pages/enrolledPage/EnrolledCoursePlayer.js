import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import CourseContentShow from "../../components/CoursePlayer/CourseContentShow";
import CourseVideoPlayer from "../../components/CoursePlayer/CourseVideoPlayer";
import PlayCourseDetail from "../../components/CoursePlayer/PlayCourseDetail";
import Loader from "../../components/SharedComponents/Loader";

import { getEnrolledCourseDetails } from "../../redux/reducers/userSideCourses/userSideCoursesSlice";

const EnrolledCoursePlayer = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  const onVideoSelect = (videoUrl) => {
    setVideoUrl(videoUrl);
  };

  const { isLoadingDetails, enrolledCourseDetails } = useSelector(
    (state) => state.userSideCourses
  );

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEnrolledCourseDetails(id));
  }, []);

  return (
    <div style={{ marginTop: "150px" }}>
      {isLoadingDetails || !enrolledCourseDetails ? (
        <Loader />
      ) : (
        <Container>
          <Row>
            <Col md={8}>
              <CourseVideoPlayer videoUrl={videoUrl} />
              <PlayCourseDetail course={enrolledCourseDetails} />
            </Col>
            <Col md={4}>
              <CourseContentShow
                course={enrolledCourseDetails}
                onVideoSelect={onVideoSelect}
              />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default EnrolledCoursePlayer;
