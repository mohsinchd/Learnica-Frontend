import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

import Rating from "../../SharedComponents/Rating";

const SingleCourseReviews = () => {
  const { course } = useSelector((state) => state.admin);

  return (
    <div>
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course Name</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {course.course.reviews.map((cour) => (
            <tr key={cour._id}>
              <td className="d-flex align-items-center">
                <img
                  src={cour.user.avatar.url}
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: "50%",
                  }}
                  alt="Error"
                />
                <span className="ms-2">{cour.user.name}</span>
              </td>
              <td>{course.course.title}</td>
              <td>
                <div className="d-flex align-items-center">
                  <Rating value={cour.rating} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SingleCourseReviews;
