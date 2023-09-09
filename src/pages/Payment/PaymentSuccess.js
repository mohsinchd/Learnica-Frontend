import React from "react";
import { Container } from "react-bootstrap";

const PaymentSuccess = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      <Container className="p-5">
        <h1 className="text-center">
          Congratulations! Payment Successfull. You are enrolled in the course.
          Please check your Enrolled Courses. 🎉🎉🎉
        </h1>
      </Container>
    </div>
  );
};

export default PaymentSuccess;
