import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/auth/authSlice"; // Import your logout action
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const UserProfileDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <DropdownButton
      id="user-profile-dropdown"
      title="User Profile"
      variant="outline-success mb-2"
      size="sm"
      style={{ borderRadius: "500px" }}
    >
      <Dropdown.Item onClick={() => navigate("/edit-profile")}>
        Edit Profile
      </Dropdown.Item>

      <Dropdown.Divider />
      <Dropdown.Item
        onClick={() => navigate("/edit-profile/password-Information")}
      >
        Password
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => navigate("/edit-profile/enrollment")}>
        Enrolled status
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => navigate("")}>
        Become Instructor
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => navigate("")}>
        Your Cart <span varient="outline-success">🛒</span>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
    </DropdownButton>
  );
};

export default UserProfileDropdown;
