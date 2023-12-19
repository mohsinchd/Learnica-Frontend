import React from "react";
import { Card, Col } from "react-bootstrap";
import AdminBarChart from "./AdminBarChart";
import AdminDoughnutChart from "./AdminDoughnutChart";

const AdminCharts = () => {
  return (
    <>
      <Col md={7}>
        <Card className="p-3 h-100">
          <h3>Student Enrollment Analysis</h3>
          <AdminBarChart />
        </Card>
      </Col>
      <Col md={5}>
        <Card className="p-3 h-100">
          <h3>Courses Analysis</h3>
          <AdminDoughnutChart />
        </Card>
      </Col>
    </>
  );
};

export default AdminCharts;

// This React component uses a 3rd party libaray to display the charts + graphical data to the admin. So that the admin can see the anayltical data.
