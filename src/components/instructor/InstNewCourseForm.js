import React, { useState } from "react";
import { Form, Container, Button, Row, Col } from "react-bootstrap";

// import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createCourse } from "../../redux/reducers/instructor/instructorSlice";
import InstructorOffCanvas from "./InstructorOffCanvas";
import BackButton from "../SharedComponents/BackButton";

const InstNewCourseForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    file: "",
    preReq: "",
    courseFor: "This course is for beginners",
  });

  const handleDrop = (e) => {
    const file = e.target.files[0];

    setFormData((prev) => {
      return { ...prev, file: file };
    });
  };

  // change-Handler
  const inputChangeHandler = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    formData.price = Number(formData.price);

    const courseData = new FormData();

    for (let key in formData) {
      courseData.append(key, formData[key]);
    }

    dispatch(createCourse(courseData));
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <Container className=" ">
        <Row>
          <Col md={2}>
            <InstructorOffCanvas />
          </Col>
          <Col md={10} className="  autoWidth shadow p-5">
            <Form onSubmit={submitFormHandler} className="">
              <h2 className="text-center mb-4">
                Requirements ! For Make Course
              </h2>
              <Form.Group controlId="title" className="mb-4">
                <Form.Label>Course Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Title of Course .."
                  onChange={inputChangeHandler}
                />
              </Form.Group>
              <Form.Group controlId="preReq" className="mb-4">
                <Form.Label>Course Prerequisite</Form.Label>
                <Form.Control
                  type="text"
                  name="preReq"
                  placeholder="write the Prerequisite .."
                  onChange={inputChangeHandler}
                />
              </Form.Group>
              <Form.Group controlId="description" className="mb-4">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  placeholder="Enter description"
                  onChange={inputChangeHandler}
                />
              </Form.Group>
              <Form.Group controlId="file" className="mb-4">
                <Form.Label>Thumbnail</Form.Label>

                <Form.Control
                  type="file"
                  name="file"
                  onChange={handleDrop}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="Price" className="mb-4">
                <Form.Label>Course Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Price of Course .."
                  inputMode="numeric"
                  name="price"
                  onChange={inputChangeHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  name="category"
                  aria-label="Default select example"
                  onChange={inputChangeHandler}
                >
                  <option>Open this select menu</option>
                  <option value="Development">Development</option>
                  <option value="Design">Design</option>
                  <option value="IT & Software">IT & Software</option>
                  <option value="Business">Business</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Music">Music</option>
                </Form.Select>
              </Form.Group>

              <Button variant="success" className="w-100" type="submit">
                Add Course
              </Button>
            </Form>
            <BackButton />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InstNewCourseForm;
