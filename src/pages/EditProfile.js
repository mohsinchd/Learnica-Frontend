import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Avatar from "../components/SharedComponents/Avatar";
import Sidebar from "../components/EditProfile/Sidebar";
import BasicInfo from "../components/EditProfile/BasicInfo";
import PasswordChange from "../components/EditProfile/PasswordChange";
import { Outlet } from "react-router";
const EditProfile = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      <Container>
        <Row>
          <Col md={4}>
            <h3>Your Detail</h3>
            <Sidebar />
          </Col>
          <Col md={8}>
            <Row>
              <Col md={3}>
                <Avatar src="" alt="don't exist " />
              </Col>
              <Col md={9}>
                <Outlet />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditProfile;
