import React from "react";
import { Button, Table } from "react-bootstrap";

const InstSecLectureTable = ({ lectures, editLecture }) => {
  return (
    <>
      {lectures.length === 0 ? (
        <h4>No Lectures for this section.</h4>
      ) : (
        <Table responsive striped hover>
          <thead>
            <th>Lecture Title</th>
            <th></th>
          </thead>
          <tbody>
            {lectures.map((lecture) => (
              <tr key={lecture.id}>
                <td>{lecture.title}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => editLecture(lecture.id)}
                  >
                    EDIT
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default InstSecLectureTable;
