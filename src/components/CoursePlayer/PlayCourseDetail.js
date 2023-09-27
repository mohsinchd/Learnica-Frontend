import React, { useState, useEffect } from "react";
import { Form, Row, Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import {
  addNewReview,
  reset,
} from "../../redux/reducers/courseReviews/courseReviewsSlice";

import ReactStars from "react-rating-stars-component";
import toast from "react-hot-toast";
import Loader from "../SharedComponents/Loader";

const PlayCourseDetail = ({ course }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { isLoading, isSuccess, successMessage, errorMessage, isError } =
    useSelector((state) => state.courseReviews);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!rating || !comment) {
      return toast.error("Rating and Comment are Required.");
    }

    let reviewData = {
      courseId: course._id,
      rating,
      comment,
    };

    dispatch(addNewReview(reviewData));

    setComment("");
  };

  useEffect(() => {
    if (successMessage && isSuccess) {
      toast.success(successMessage);
      dispatch(reset());
    }

    if (isError && errorMessage) {
      toast.error(errorMessage);
      dispatch(reset());
    }
  }, [successMessage, errorMessage, isSuccess, isError, dispatch]);

  return (
    <Row>
      <div dangerouslySetInnerHTML={{ __html: course.description }}></div>
      <p>Total Sections : {course.sections.length}</p>
      <p>
        Total Lectures :{" "}
        {course.sections.reduce(
          (acc, section) => acc + section.lectures.length,
          0
        )}
      </p>

      <div className="mb-3 border-bottom">
        <img
          src={course.instructor.avatar.url}
          alt="noimage"
          className="img-fluid rounded-circle border border-primary mb-3"
          style={{ height: 180, width: 180, objectFit: "cover" }}
        />
        <h5>Created By : {course.instructor.name}</h5>
        <h5>Email: {course.instructor.email}</h5>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </Row>
  );
};

export default PlayCourseDetail;
