import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

import Rating from "../../SharedComponents/Rating";

const InstructorAnalyticsReviews = () => {
  const { analytics } = useSelector((state) => state.instructor);

  return (
    <div>
      <h3>Latest Reviews</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course Name</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {analytics.reviews.map((review) => (
            <tr key={review._id}>
              <td className="d-flex align-items-center">
                <img
                  src={review.review.user.avatar.url}
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: "50%",
                  }}
                  alt="Error"
                />
                <span className="ms-2">{review.review.user.name}</span>
              </td>
              <td>{review.title}</td>
              <td>
                <div className="d-flex align-items-center">
                  <Rating value={review.review.rating} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default InstructorAnalyticsReviews;
