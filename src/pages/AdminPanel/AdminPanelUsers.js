import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { PiUsersDuotone } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { getAdminUsers } from "../../redux/reducers/admin/adminSlice";

import Sidebar from "../../components/AdminComponents/Sidebar";
import UsersTable from "../../components/AdminComponents/AllUsers/UsersTable";
import Loader from "../../components/SharedComponents/Loader";

const AdminPanelUsers = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAdminUsers());
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
            <PiUsersDuotone
              size={50}
              className="bg-dark rounded text-light p-2 me-2"
            />
            <h3 className="mb-0">All Users</h3>
          </div>

          {/* Users Table */}
          {isLoading ? (
            <Loader />
          ) : (
            <div className="my-4">
              <UsersTable />
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AdminPanelUsers;
