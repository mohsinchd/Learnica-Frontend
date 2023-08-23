import React, { useState } from "react";
import { Form, Container, Button, Row, Col } from "react-bootstrap";

import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createCourse } from "../../redux/reducers/instructor/instructorSlice";

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
      <Container className="w-50 authWidth shadow p-5">
        <h2 className="text-center mb-4">Requirements ! For Make Course</h2>
        <Row>
          <Col>
            <Form onSubmit={submitFormHandler} className="">
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
                {/* <Dropzone onDrop={handleDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} className="thumbnail-dropzone">
                      <input {...getInputProps()} />
                      {formData.file ? (
                        <img src={formData.file} alt="Thumbnail" />
                      ) : (
                        <p>
                          <Button className="w-100" variant="">
                            Drag'n drop
                          </Button>
                          Drag 'n' drop a thumbnail image here, to guess the
                          course quality !
                        </p>
                      )}
                    </div>
                  )}
                </Dropzone> */}
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
              <div className="d-flex justify-content-between">
                <Button variant="danger" onClick={() => navigate(-1)}>
                  cancel
                </Button>
                <Button variant="success" type="submit">
                  Add Course
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InstNewCourseForm;
