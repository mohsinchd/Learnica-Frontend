import React from "react";
import { ListGroup } from "react-bootstrap";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { PiUserRectangle } from "react-icons/pi";

import Rating from "../../../components/SharedComponents/Rating";

const SingleUser = () => {
  const { user } = useSelector((state) => state.admin);

  return (
    <>
      <div className="d-flex align-items-center">
        <img
          src={user.avatar.url}
          alt="error"
          style={{
            height: 200,
            width: 200,
            borderRadius: "50%",
          }}
        />
        <div>
          <h3 className="ms-2">{user.name}</h3>
          <p className="ms-2">USER ID: {user._id}</p>
        </div>
      </div>
      <div className="my-3">
        <ListGroup>
          <ListGroup.Item className="p-3">
            <h4 className="mb-0">Personal Information</h4>
          </ListGroup.Item>
          <ListGroup.Item className="p-3">
            <div className="d-flex mb-3">
              <MdOutlineAlternateEmail size={30} />
              <div>
                <h5 className="ms-2 mb-0">Email Id</h5>
                <p className="ms-2 mb-0">{user.email}</p>
              </div>
            </div>
            <div className="d-flex mb-3">
              <BsCalendar3 size={30} />
              <div>
                <h5 className="ms-2 mb-0">Member Since</h5>
                <p className="ms-2 mb-0">{user.createdAt.substring(0, 10)}</p>
              </div>
            </div>
            <div className="d-flex">
              <PiUserRectangle size={30} />
              <div>
                <h5 className="ms-2 mb-0">Role</h5>
                <p className="ms-2 mb-0">{user.role}</p>
              </div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="p-3">
            <h4 className="mb-0">Enrolled Courses</h4>
          </ListGroup.Item>
          <ListGroup.Item className="p-3">
            {user.enrolledCourses.length === 0 && (
              <h5>Not Enrolled In Any Course.</h5>
            )}
            {user.enrolledCourses.map((course) => (
              <div key={course._id} className="d-flex mb-3 align-items-center">
                <img
                  src={course.poster.url}
                  alt="error"
                  style={{
                    height: 150,
                    widows: 150,
                  }}
                  className="img-fluid rounded"
                />
                <div>
                  <h5 className="ms-2 mb-0">{course.title}</h5>
                  <p className="ms-2 mb-0">${course.price}</p>
                  <div className="ms-2">
                    <Rating
                      value={course.averageRating}
                      text={` of ${course.numOfReviews} reviews`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};

export default SingleUser;
