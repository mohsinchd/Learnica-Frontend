import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <NavLink to="/edit-profile/basic-Information">
          <Nav.Link href="/edit-profile/basic-Information">
            Personal Information
          </Nav.Link>
        </NavLink>
        <NavLink to="/edit-profile/password-Information">
          <Nav.Link href="/edit-profile/password-Information">
            Password
          </Nav.Link>
        </NavLink>

        <NavLink to="/edit-profile/enrollment">
          <Nav.Link href="/edit-profile/enrollment">Enrollment</Nav.Link>
        </NavLink>
      </Nav>
    </div>
  );
};

export default Sidebar;
