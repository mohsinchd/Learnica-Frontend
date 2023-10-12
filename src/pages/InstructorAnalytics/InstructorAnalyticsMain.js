import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { getInstAnalytics } from "../../redux/reducers/instructor/instructorSlice";

import InstructorAnalyticsTopCards from "../../components/instructor/InstructorAnalyticsComponents/InstructorAnalyticsTopCards";
import InstructorAnalyticsCharts from "../../components/instructor/InstructorAnalyticsComponents/InstructorAnalyticsCharts";
import InstructorAnalyticsReviews from "../../components/instructor/InstructorAnalyticsComponents/InstructorAnalyticsReviews";
import Loader from "../../components/SharedComponents/Loader";

const InstructorAnalyticsMain = () => {
  const dispatch = useDispatch();
  const { isLoading, analytics } = useSelector((state) => state.instructor);

  useEffect(() => {
    dispatch(getInstAnalytics());
  }, []);

  return (
    <div style={{ marginTop: "150px" }}>
      {isLoading || !analytics ? (
        <Loader />
      ) : (
        <Container>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <TbDeviceDesktopAnalytics
                size={50}
                className="bg-dark rounded text-light p-2 me-2"
              />
              <h3 className="mb-0">Dashboard Analytics</h3>
            </div>
            <div>
              <Link to="/instNewCourseForm">
                <Button variant="primary" size="sm">
                  +Create New Course
                </Button>
              </Link>
            </div>
          </div>

          {/* Top Cards */}
          <Row className="my-4">
            <InstructorAnalyticsTopCards />
          </Row>

          {/* Charts */}
          <Row className="my-4">
            <InstructorAnalyticsCharts />
          </Row>

          {/* Review Table */}
          <div className="my-4">
            <InstructorAnalyticsReviews />
          </div>
        </Container>
      )}
    </div>
  );
};

export default InstructorAnalyticsMain;
