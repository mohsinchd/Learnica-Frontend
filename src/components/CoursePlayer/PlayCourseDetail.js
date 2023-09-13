import React, { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const PlayCourseDetail = ({ course }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(rating);
    console.log(comment);
    // Set rating to 0 after submitting
    setComment("");
  };

  return (
    <Row>
      <Form onSubmit={submitHandler}>
        <h3>Your Review </h3>
        <Form.Group>
          <Form.Label className="mb-0">Select Rating</Form.Label>
          <ReactStars
            count={5}
            value={rating} // Set rating from the state
            onChange={(newRating) => {
              setRating(newRating);
            }}
            size={35}
            isHalf={true}
            activeColor="#ffc700"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Write your comment"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </Form.Group>
        <div className="d-flex justify-content-between my-3">
          <Button
            variant="success"
            onClick={(e) => {
              setRating();
              setComment("");
            }}
          >
            Cancel
          </Button>
          <Button type="submit" variant="success">
            Add Review
          </Button>
        </div>
      </Form>

      <h2>About Course</h2>
      <p>{course.description}</p>
      <p>Total Sections : {course.sections.length}</p>
      <p>
        Total Lectures :{" "}
        {course.sections.reduce(
          (acc, section) => acc + section.lectures.length,
          0
        )}
      </p>
      <div>
        <img
          src={course.instructor.avatar.url}
          alt="noimage"
          className="img-fluid rounded-circle border border-primary mb-3"
          style={{ height: 180, width: 180, objectFit: "cover" }}
        />
        <h5>Created By : {course.instructor.name}</h5>
        <h5>Email: {course.instructor.email}</h5>
      </div>
    </Row>
  );
};

export default PlayCourseDetail;
