import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

import { getAdminAnalytics } from "../../redux/reducers/admin/adminSlice";
import Sidebar from "../../components/AdminComponents/Sidebar";
import TopCards from "../../components/AdminComponents/MainAnalytics/TopCards";
import AdminCharts from "../../components/AdminComponents/MainAnalytics/AdminCharts";
import Loader from "../../components/SharedComponents/Loader";
import AdminReviews from "../../components/AdminComponents/MainAnalytics/AdminReviews";

const AdminPanelMain = () => {
  const dispatch = useDispatch();
  const { isLoading, analytics } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAdminAnalytics());
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
            <TbDeviceDesktopAnalytics
              size={50}
              className="bg-dark rounded text-light p-2 me-2"
            />
            <h3 className="mb-0">Dashboard Analytics</h3>
          </div>
          {isLoading || !analytics ? (
            <Loader />
          ) : (
            <>
              <Row className="my-4">
                <TopCards />
              </Row>

              <Row className="my-4">
                <AdminCharts />
              </Row>

              <div className="my-4">
                <h3>Latest Reviews From Students</h3>
                <AdminReviews />
              </div>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AdminPanelMain;

// This is the component to show the admin panel.
// In this component the admins of the appication can see the details about the courses and They can also see the analytics about everything.AdminCharts
// Moreover, the admins can have access to the courses and they can manange the users of the application.
