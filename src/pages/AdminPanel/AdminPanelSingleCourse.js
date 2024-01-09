import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { BsPersonVideo3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Sidebar from "../../components/AdminComponents/Sidebar";
import Loader from "../../components/SharedComponents/Loader";
import { getAdminSingleCourse } from "../../redux/reducers/admin/adminSlice";
import SingleCourseTopCards from "../../components/AdminComponents/SingleCourse/SingleCourseTopCards";
import SingleCourseCharts from "../../components/AdminComponents/SingleCourse/SingleCourseCharts";
import SingleCourseAbout from "../../components/AdminComponents/SingleCourse/SingleCourseAbout";
import SingleCourseReviews from "../../components/AdminComponents/SingleCourse/SingleCourseReviews";
import SingleCourseEnrolledStudents from "../../components/AdminComponents/SingleCourse/SingleCourseEnrolledStudents";

const AdminPanelSingleCourse = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, course } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAdminSingleCourse(id));
  }, []);

  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <Row>
        <Col md={2} className="p-0" style={{ minHeight: "100vh" }}>
          <Sidebar />
        </Col>
        <Col md={10} className="py-3 px-4">
          <div className="d-flex align-items-center">
            <BsPersonVideo3
              size={50}
              className="bg-dark rounded text-light p-2 me-2"
            />
            <h3 className="mb-0">Course</h3>
          </div>
          {isLoading || !course ? (
            <Loader />
          ) : (
            <>
              {/* Course Details */}
              <Row className="my-4">
                <SingleCourseTopCards />
              </Row>
              {/* Analytics */}
              <Row className="my-4">
                <SingleCourseCharts />
              </Row>
              {/* Reviews */}
              <div className="my-4">
                <h3>Latest Reviews From Students</h3>
                <SingleCourseReviews />
              </div>
              {/* Enrolled Students */}
              <div className="my-4">
                <h3>Enrolled Students</h3>
                <SingleCourseEnrolledStudents />
              </div>
              {/* Course Details */}
              <Row className="my-4">
                <SingleCourseAbout />
              </Row>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AdminPanelSingleCourse;
