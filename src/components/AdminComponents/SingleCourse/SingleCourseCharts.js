import React from "react";
import { Card, Col } from "react-bootstrap";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const SingleCourseCharts = () => {
  return (
    <>
      <Col md={6}>
        <Card className="p-3 h-100">
          <h3>Enrollements / Month in Bar Chart</h3>
          <BarChart />
        </Card>
      </Col>
      <Col md={6}>
        <Card className="p-3 h-100">
          <h3>Enrollements / Month in Line Chart</h3>
          <LineChart />
        </Card>
      </Col>
    </>
  );
};

export default SingleCourseCharts;
