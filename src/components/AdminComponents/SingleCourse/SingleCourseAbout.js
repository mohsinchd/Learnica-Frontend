import React from "react";
import { Card, Col, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import Rating from "../../SharedComponents/Rating";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { PiUserRectangle } from "react-icons/pi";

const SingleCourseAbout = () => {
  const { course } = useSelector((state) => state.admin);

  return (
    <>
      <Col md={7}>
        <Card className="h-100">
          <Card.Header className="p-3">
            <h3 className="mb-0">About Course</h3>
          </Card.Header>
          <Card.Img src={course.course.poster.url} alt="error"></Card.Img>
          <Card.Body>
            <h4>{course.course.title}</h4>
            <p>Category: {course.course.category}</p>
            <div className="d-flex">
              <span className="fw-bold me-2">
                {course.course.averageRating}
              </span>
              <Rating
                value={course.course.averageRating}
                text={` of ${course.course.numOfReviews} reviews`}
              />
            </div>
            <p>Price: ${course.course.price}</p>
            <p>Created At: {course.course.createdAt.substring(0, 10)}</p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={5}>
        <Card className="h-100">
          <Card.Header className="p-3">
            <h3 className="mb-0">About Instructor</h3>
          </Card.Header>
          <Card.Img
            className="img-fluid"
            src={course.course.instructor.avatar.url}
            alt="error"
          ></Card.Img>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item className="p-3">
                <h4 className="mb-0">Personal Information</h4>
              </ListGroup.Item>
              <ListGroup.Item className="p-3">
                <div className="d-flex mb-3">
                  <MdOutlineAlternateEmail size={30} />
                  <div>
                    <h5 className="ms-2 mb-0">Email Id</h5>
                    <p className="ms-2 mb-0">
                      {course.course.instructor.email}
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <BsCalendar3 size={30} />
                  <div>
                    <h5 className="ms-2 mb-0">Member Since</h5>
                    <p className="ms-2 mb-0">
                      {course.course.instructor.createdAt.substring(0, 10)}
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <PiUserRectangle size={30} />
                  <div>
                    <h5 className="ms-2 mb-0">Role</h5>
                    <p className="ms-2 mb-0">{course.course.instructor.role}</p>
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleCourseAbout;
