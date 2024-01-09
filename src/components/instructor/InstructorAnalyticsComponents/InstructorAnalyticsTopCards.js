import React from "react";
import { Col, Card } from "react-bootstrap";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiStudentDuotone } from "react-icons/pi";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { useSelector } from "react-redux";

const InstructorAnalyticsTopCards = () => {
  const { analytics } = useSelector((state) => state.instructor);

  return (
    <>
      <Col md={4}>
        <Card className="p-5 bg-success text-light">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="mb-0">Total Earnings</h3>
            <RiMoneyDollarCircleLine size={45} />
          </div>
          <h4>{analytics.totalEarning}$</h4>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="p-5 bg-dark text-light">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="mb-0">Total Joins</h3>
            <PiStudentDuotone size={45} />
          </div>
          <h4>{analytics.totalEnrolledStudents} students</h4>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="p-5 bg-info text-light">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="mb-0">Total Courses</h3>
            <MdOutlineSlowMotionVideo size={45} />
          </div>
          <h4>{analytics.totalCourses} courses</h4>
        </Card>
      </Col>
    </>
  );
};

export default InstructorAnalyticsTopCards;
