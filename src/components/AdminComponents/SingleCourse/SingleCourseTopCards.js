import React from "react";
import { Card, Col } from "react-bootstrap";
import { PiUsersDuotone } from "react-icons/pi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const SingleCourseTopCards = () => {
  const { course } = useSelector((state) => state.admin);

  return (
    <>
      <Col md={6}>
        <Card className="p-4 bg-success text-light">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="mb-0">Total Earnings</h3>
            <RiMoneyDollarCircleLine size={45} />
          </div>
          <h4>{course.totalEarning}$</h4>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="p-4 bg-dark text-light">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="mb-0">Total Enrollments</h3>
            <PiUsersDuotone size={45} />
          </div>
          <h4>{course.totalEnrollements} students</h4>
        </Card>
      </Col>
    </>
  );
};

export default SingleCourseTopCards;
