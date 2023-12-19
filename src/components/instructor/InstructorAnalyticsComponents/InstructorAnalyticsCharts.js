import React from "react";
import { Col, Card } from "react-bootstrap";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";

const InstructorAnalyticsCharts = () => {
  return (
    <>
      <Col md={7}>
        <Card className="p-3 h-100">
          <h3>Student Enrollment Analysis</h3>
          <BarChart />
        </Card>
      </Col>
      <Col md={5}>
        <Card className="p-3 h-100">
          <h3>Courses Analysis</h3>
          <DoughnutChart />
        </Card>
      </Col>
    </>
  );
};

export default InstructorAnalyticsCharts;
