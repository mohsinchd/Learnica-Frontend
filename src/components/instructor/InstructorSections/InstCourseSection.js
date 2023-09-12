import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import BackButton from "../../SharedComponents/BackButton";
import { useParams } from "react-router-dom";

import toast from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import {
  createSection,
  getSections,
  reset,
} from "../../../redux/reducers/courseSections/courseSectionsSlice";

import InstCourseSectionTable from "./InstCourseSectionTable";
import Loader from "../../SharedComponents/Loader";

const InstCourseSection = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [edit, setEdit] = useState(false);

  const {
    isLoading,
    isError,
    isSuccess,
    errorMessage,
    successMessage,
    sections,
  } = useSelector((state) => state.courseSections);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title) {
      return toast.error(" title is Required !");
    }

    dispatch(createSection({ title, courseId: id }));
  };
  const editTitleHanlder = (id) => {
    setEdit(true);
    console.log(id);
  };

  useEffect(() => {
    if (isSuccess && successMessage) {
      toast.success(successMessage);
      dispatch(reset());
    }
    if (isError && errorMessage) {
      toast.error(errorMessage);
      dispatch(reset());
    }
    dispatch(getSections({ courseId: id }));
  }, [isSuccess, successMessage, isError, errorMessage, dispatch]);

  return (
    <div style={{ marginTop: "150px" }}>
      <Container>
        <h2>{!edit ? "Add Section" : "Edit section"} </h2>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mt-3" controlId="title">
            <Form.Label>Title of Your Section </Form.Label>
            <div className="d-flex align-items-center">
              <Form.Control
                type="text"
                placeholder="Title Here ..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Button type="submit" variant="success">
                {!edit ? "Add" : "Edit"}
              </Button>
            </div>
          </Form.Group>
        </Form>

        <div className="my-5">
          {isLoading ? (
            <Loader />
          ) : (
            <InstCourseSectionTable
              sections={sections}
              courseId={id}
              editSection={editTitleHanlder}
            />
          )}
        </div>

        <BackButton />
      </Container>
    </div>
  );
};

export default InstCourseSection;
