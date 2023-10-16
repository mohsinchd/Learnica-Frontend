import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const SingleCourseEnrolledStudents = () => {
  const { course } = useSelector((state) => state.admin);

  return (
    <div>
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>Student</th>
            <th>Course Name</th>
            <th>Email</th>
            <th>Student Id</th>
          </tr>
        </thead>
        <tbody>
          {course.course.enrolledStudents.map((student) => (
            <tr key={student._id}>
              <td className="d-flex align-items-center">
                <img
                  src={student.avatar.url}
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: "50%",
                  }}
                  alt="Error"
                />
                <span className="ms-2">{student.name}</span>
              </td>
              <td>{course.course.title}</td>
              <td>{student.email}</td>
              <td>{student._id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SingleCourseEnrolledStudents;
