import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/auth/authSlice"; // Import your logout action
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserProfileDropdown = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <DropdownButton
        id="user-profile-dropdown"
        title={user.name}
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
      <img
        src={user.avatar.url}
        alt="Error"
        className="img-fluid rounded-circle mb-2 ms-2"
        style={{
          width: 50,
          height: 50,
        }}
      />
    </>
  );
};

export default UserProfileDropdown;
