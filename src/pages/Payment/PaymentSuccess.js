import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      <Container className="p-5">
        <h1 className="text-center">
          Congratulations! Payment Successfull. You are enrolled in the course.
          Please check your Enrolled Courses. 🎉🎉🎉
        </h1>
        <Link to={"/user-enrolledCourses"}>
          <div className="text-center">
            <Button variant="success">View Course</Button>
          </div>
        </Link>
      </Container>
    </div>
  );
};

export default PaymentSuccess;
