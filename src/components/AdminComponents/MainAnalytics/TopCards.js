import React from "react";
import { Card, Col } from "react-bootstrap";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { useSelector } from "react-redux";

import { PiUsersDuotone } from "react-icons/pi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const TopCards = () => {
  const { analytics } = useSelector((state) => state.admin);

  return (
    <>
      <Col md={4}>
        <Card className="p-4 bg-success text-light">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="mb-0">Total Earnings</h3>
            <RiMoneyDollarCircleLine size={45} />
          </div>
          <h4>{analytics.totalEarning}$</h4>
        </Card>
      </Col>
      <Col md={4}>
        <Link to={"/admin/users"}>
          <Card className="p-4 bg-dark text-light">
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="mb-0">Total Users</h3>
              <PiUsersDuotone size={45} />
            </div>
            <h4>{analytics.totalUsers} users</h4>
          </Card>
        </Link>
      </Col>
      <Col md={4}>
        <Link to={"/admin/courses"}>
          <Card className="p-4 bg-info text-light">
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="mb-0">Total Courses</h3>
              <MdOutlineSlowMotionVideo size={45} />
            </div>
            <h4>{analytics.totalCourses} courses</h4>
          </Card>
        </Link>
      </Col>
    </>
  );
};

export default TopCards;
