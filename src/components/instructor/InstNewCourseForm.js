import React, { useState } from "react";
import { Form, Container, Button, Row, Col } from "react-bootstrap";

import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { makeCourseByInstructor } from "../../redux/reducers/user/userSlice";
const InstNewCourseForm = () => {
  // const user = useSelector((state) => state.user);
  // console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    file: "",
    preReq: "",
    courseFor: "This course is for all beginners and intermediate students..",
  });

  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      // setThumbnail(URL.createObjectURL(acceptedFiles[0]));
      setFormData((prev) => {
        return { ...prev, file: URL.createObjectURL(acceptedFiles[0]) };
      });
    }
  };

  // change-Handler
  const inputChangeHandler = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    const courseData = new FormData();

    for (const key in formData) {
      courseData.append(key, formData[key]);
    }
    // console.log(formData);
    dispatch(makeCourseByInstructor);

    setFormData({
      title: "",
      description: "",
      category: "",
      price: "",
      file: "",
      preReq: "",
      courseFor: "This course is for all beginners and intermediate students..",
    });
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
                <Dropzone onDrop={handleDrop}>
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
                </Dropzone>
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
                <Form.Label>Course Type</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={inputChangeHandler}
                >
                  <option>Open this select menu</option>
                  <option value="1">Development</option>
                  <option value="2">Design</option>
                  <option value="3">IT & Software</option>
                  <option value="4">Business</option>
                  <option value="5">Marketing</option>
                  <option value="6">Music</option>
                  <option value="7">I don't know </option>
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
