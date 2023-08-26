import React, { useState } from "react";
import { Container, Form, Button, Table, Dropdown } from "react-bootstrap";
import BackButton from "../../SharedComponents/BackButton";
import { BsThreeDots } from "react-icons/bs";
import toast from "react-hot-toast";

const InstCourseSection = () => {
  const [sectionTitle, setSectionTitle] = useState("");
  const [titles, setTitles] = useState([]);
  const submitHandler = (e) => {
    if (!sectionTitle) {
      return toast.error(" title is Required !");
    }
    e.preventDefault();
    setTitles((prev) => {
      const updatedTitle = { title: sectionTitle, id: crypto.randomUUID() };
      return [...prev, updatedTitle];
    });
    setSectionTitle("");
  };
  const mapOfTitle = titles.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.title}</td>
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
              <Dropdown.Item>Add Lecture</Dropdown.Item>
              <Dropdown.Item>Edit Lecture</Dropdown.Item>
              <Dropdown.Item>Delete section</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  });
  return (
    <div style={{ marginTop: "150px" }}>
      <Container>
        <h2>Add Section </h2>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mt-3" controlId="title">
            <Form.Label>Title of Your Section </Form.Label>
            <div className="d-flex align-items-center">
              <Form.Control
                type="text"
                placeholder="Title Here ..."
                value={sectionTitle}
                onChange={(e) => setSectionTitle(e.target.value)}
              />
              <Button type="submit" variant="success">
                Add
              </Button>
            </div>
          </Form.Group>
        </Form>
        <div className="my-5">
          {titles.length > 0 && (
            <>
              <h3 className="text-center">Your Added Sections are </h3>
              <Table responsive striped hover>
                <thead>
                  <th>Title Your section </th>
                  <th></th>
                </thead>
                <tbody>{mapOfTitle}</tbody>
              </Table>
            </>
          )}
        </div>

        <BackButton />
      </Container>
    </div>
  );
};

export default InstCourseSection;
