import React from "react";
import { Button, Dropdown, Table } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";

const InstCoursesTable = ({ courses }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course._id}>
            <td>{course.title}</td>
            <td>{course.category}</td>
            <td>{course.price}</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle
                  variant="primary"
                  size="sm"
                  id="inst-course-table-dropdown"
                >
                  <BsThreeDots size={20} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Add Sections</Dropdown.Item>
                  <Dropdown.Item>Delete Course</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default InstCoursesTable;