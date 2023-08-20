import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";

import Dropzone from "react-dropzone";
import { useNavigate } from "react-router";

const InstNewCourseForm = () => {
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState(null);

  // offcanvas

  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setThumbnail(URL.createObjectURL(acceptedFiles[0]));
    }
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <Container className=" shadow p-5">
        <h2 className="text-center mb-4">Requirements ! For Make Course</h2>
        <Form onSubmit={submitFormHandler} className="">
          <Form.Group controlId="prerequisite" className="mb-4">
            <Form.Label>Course Prerequisite</Form.Label>
            <Form.Control type="text" placeholder="write the Prerequisite .." />
          </Form.Group>
          <Form.Group controlId="title" className="mb-4">
            <Form.Label>Course Title</Form.Label>
            <Form.Control type="text" placeholder="Title of Course .." />
          </Form.Group>
          <Form.Group controlId="Thumbnail" className="mb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
            />
          </Form.Group>
          <Form.Group controlId="thumbnail" className="mb-4">
            <Form.Label>Thumbnail</Form.Label>
            <Dropzone onDrop={handleDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className="thumbnail-dropzone">
                  <input {...getInputProps()} />
                  {thumbnail ? (
                    <img src={thumbnail} alt="Thumbnail" />
                  ) : (
                    <p>
                      <Button className="w-100" variant="">
                        Drag'n drop
                      </Button>
                      Drag 'n' drop a thumbnail image here, to guess the course
                      quality !
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
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Course Type</Form.Label>
            <Form.Select aria-label="Default select example">
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

            <Button variant="success" className="">
              Add Course
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default InstNewCourseForm;
