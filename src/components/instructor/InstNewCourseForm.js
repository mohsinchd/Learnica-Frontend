import React, { useState, useEffect } from "react";
import { Form, Container, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-hot-toast";

// import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  createCourse,
  reset,
} from "../../redux/reducers/instructor/instructorSlice";
import InstructorOffCanvas from "./InstructorOffCanvas";
import BackButton from "../SharedComponents/BackButton";
import Loader from "../SharedComponents/Loader";
import TextEditor from "../SharedComponents/TextEditor";

const InstNewCourseForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, errorMessage, message } = useSelector(
    (state) => state.instructor
  );

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

  const descriptionHandler = (value) => {
    setFormData((prev) => {
      return { ...prev, description: value };
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    formData.price = Number(formData.price);

    const { title, price, file, description, preReq, category } = formData;

    if (!title) {
      return toast.error("Course Title is Required.");
    }
    if (!preReq) {
      return toast.error("Course Pre-requisites are Required.");
    }
    if (!description) {
      return toast.error("Course Description is Required.");
    }
    if (!file) {
      return toast.error("Course Thumbnail is Required.");
    }
    if (!price) {
      return toast.error("Course Price is Required.");
    }
    if (!category) {
      return toast.error("Course category is Required.");
    }

    const courseData = new FormData();

    for (let key in formData) {
      courseData.append(key, formData[key]);
    }

    dispatch(createCourse(courseData));
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
            <Col md={10} className="  autoWidth  p-5">
              <Form onSubmit={submitFormHandler} className="">
                <h2 className=" mb-4">Create New Course</h2>
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
                    accept="image/jpeg, image/png, img/gif"
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
                    <option>Select Category</option>
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
      )}
    </div>
  );
};

export default InstNewCourseForm;
