import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import InstructorOffCanvas from "../InstructorOffCanvas";
import BackButton from "../../SharedComponents/BackButton";
import {
  reset,
  updateCourse,
} from "../../../redux/reducers/instructor/instructorSlice";
import toast from "react-hot-toast";
import Loader from "../../SharedComponents/Loader";
import TextEditor from "../../SharedComponents/TextEditor";

const InstructorSectionEdit = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    file: "",
    preReq: "",
    courseFor: "This course is for beginners",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, errorMessage, message, isError } = useSelector(
    (state) => state.instructor
  );

  const { id } = useParams();

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
    // formData.price = Number(formData.price);

    const courseData = new FormData();

    for (let key in formData) {
      courseData.append(key, formData[key]);
    }

    console.log(courseData);

    dispatch(updateCourse({ courseData, id }));
  };

  const descriptionHandler = (value) => {
    setFormData((prev) => {
      return { ...prev, description: value };
    });
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(reset());
      navigate("/instructor/courses");
    }

    if (isError && errorMessage) {
      toast.error(errorMessage);
      dispatch(reset());
    }
  }, [message, isError, errorMessage, navigate, dispatch]);

  return (
    <div style={{ marginTop: "150px" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container className=" ">
          <Row>
            <Col md={2}>
              <InstructorOffCanvas />
            </Col>
            <Col md={10} className="  autoWidth p-5">
              <Form onSubmit={submitFormHandler} className="">
                <h2 className="text-center mb-4">Edit Your Course!</h2>
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
                  <TextEditor descriptionHandler={descriptionHandler} />
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
                  Edit
                </Button>
              </Form>
              <BackButton />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default InstructorSectionEdit;
