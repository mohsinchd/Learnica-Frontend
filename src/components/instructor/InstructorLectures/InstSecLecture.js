import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BackButton from "../../SharedComponents/BackButton";
import InstSecLectureTable from "./InstSecLectureTable";
import Loader from "../../SharedComponents/Loader";

import {
  createLecture,
  reset,
  getLectures,
  editLectureThunk,
  deleteLectureThunk,
} from "../../../redux/reducers/courseLectures/courseLecturesSlice";

const InstSecLecture = () => {
  const [title, setTitle] = useState("");
  const [isVideoFile, setIsVideoFile] = useState("");
  const [video, setVideo] = useState("");
  const [editLecture, setEditLecture] = useState(false);
  const [lectureId, setLectureId] = useState("");

  const { courseId, sectionId } = useParams();

  const {
    isLoading,
    isError,
    isSuccess,
    errorMessage,
    successMessage,
    lectures,
  } = useSelector((state) => state.courseLectures);

  const dispatch = useDispatch();

  const handlevideoUpload = (event) => {
    setIsVideoFile(URL.createObjectURL(event.target.files[0]));
    setVideo(event.target.files[0]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const lectureData = new FormData();

    if (!title || !video) {
      return toast.error("Title and Video is Required.");
    }

    lectureData.append("title", title);
    lectureData.append("file", video);

    let data = {
      ids: {
        courseId,
        sectionId,
      },
      lectureData,
    };

    dispatch(createLecture(data));

    setTitle("");
    setEditLecture(false);
    setIsVideoFile("");
    setVideo("");
  };

  const editLectureHandler = (id, title) => {
    console.log(id);
    setEditLecture(true);
    setLectureId(id);
    setTitle(title);
  };

  const submitEditLecture = (event) => {
    event.preventDefault();

    const lectureData = new FormData();

    lectureData.append("title", title);
    lectureData.append("file", video);

    let data = {
      ids: {
        courseId,
        sectionId,
        lectureId,
      },
      lectureData,
    };

    dispatch(editLectureThunk(data));
    setTitle("");
    setEditLecture(false);
    setIsVideoFile("");
    setVideo("");
  };

  const deleteLectureHandler = (lectureId) => {
    let data = {
      ids: {
        courseId,
        sectionId,
        lectureId,
      },
    };
    dispatch(deleteLectureThunk(data));
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

    dispatch(getLectures({ courseId, sectionId }));
  }, [isSuccess, isError, successMessage, errorMessage]);

  return (
    <div style={{ marginTop: "150px" }}>
      <Container>
        <Row>
          <Col md={8}>
            <h3>Lectures</h3>
            {isLoading ? (
              <Loader />
            ) : (
              <InstSecLectureTable
                lectures={lectures}
                editLecture={editLectureHandler}
                deleteLecture={deleteLectureHandler}
              />
            )}
          </Col>
          <Col md={4}>
            <h2>{!editLecture ? "Add Lecture" : "Edit Lecture"} </h2>
            <Form
              onSubmit={(event) =>
                !editLecture ? submitHandler(event) : submitEditLecture(event)
              }
            >
              <Form.Group className="mb-3" controlId="forTheTitle">
                <Form.Label>Title </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title of Your lecture ...."
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="videoLecture">
                <Form.Label>Select Video</Form.Label>
                <Form.Control type="file" onChange={handlevideoUpload} />
              </Form.Group>
              {isVideoFile && (
                <div
                  className="mt-3"
                  style={{ width: "100%", maxWidth: "700px", margin: "auto" }}
                >
                  <video controls style={{ height: "100%", width: "100%" }}>
                    <source src={isVideoFile} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              <Button type="submit" variant="success" className="mt-3">
                {!editLecture ? "Add Lecture" : "Edit"}
              </Button>
            </Form>
          </Col>
        </Row>
        <BackButton />
      </Container>
    </div>
  );
};

export default InstSecLecture;
