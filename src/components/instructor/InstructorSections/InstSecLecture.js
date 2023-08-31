import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import BackButton from "../../SharedComponents/BackButton";

const InstSecLecture = () => {
  const [title, setTitle] = useState("");
  const [isVideoFile, setIsVideoFile] = useState("");
  const [lectures, setLectures] = useState([]);

  const handlevideoUpload = (event) => {
    setIsVideoFile(URL.createObjectURL(event.target.files[0]));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const updatedLectures = {
      title,
      lectureVideo: isVideoFile,
      id: crypto.randomUUID(),
    };
    setLectures((previous) => {
      return [...previous, updatedLectures];
    });
    setTitle("");
    setIsVideoFile("");
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <Container>
        <Row>
          <Col md={6}>
            <h3 className="text-center">SECTIONS</h3>
            {lectures.length === 0 ? (
              <h4>No Sections for this course.</h4>
            ) : (
              <Table responsive striped hover>
                <thead>
                  <th>Section Titles</th>
                  <th></th>
                </thead>
                <tbody>
                  {lectures.map((lecture) => (
                    <tr key={lecture.id}>
                      <td>{lecture.title}</td>
                      <td>
                        <Button variant="success">EDIT</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Col>
          <Col md={6}>
            <Form onSubmit={submitHandler}>
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
                <Form.Label>Which is the Lecture video ..</Form.Label>
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
              <Button type="submit" variant="success" className="mt-3 w-100">
                Click to Add Lecture
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
