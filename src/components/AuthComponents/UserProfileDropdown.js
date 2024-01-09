import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/auth/authSlice"; // Import your logout action
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getUserInfo, reset } from "../../redux/reducers/user/userSlice";
import SmallLoader from "../SharedComponents/SmallLoader";

const UserProfileDropdown = () => {
  const { user, isLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return isLoading || !user ? (
    <SmallLoader />
  ) : (
    <>
      <DropdownButton
        align={"end"}
        id="user-profile-dropdown"
        title={
          <img
            src={user.avatar.url}
            alt="Error"
            className="img-fluid rounded-circle mb-2"
            style={{
              width: 50,
              height: 50,
            }}
          />
        }
        // title={user.name}
        variant=" mb-2"
        size="sm"
        style={{ borderRadius: "500px" }}
      >
        <Dropdown.Item>
          <div className="d-flex align-items-center">
            <img
              src={user.avatar.url}
              alt="Error"
              className="img-fluid rounded-circle mb-2 me-2"
              style={{
                width: 50,
                height: 50,
              }}
            />
            <p className="text-light fw-bold">{user.name}</p>
          </div>
          <p className="text-light">{user.email}</p>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => navigate("/edit-profile")}>
          Update Profile
        </Dropdown.Item>

        <Dropdown.Divider />
        <Dropdown.Item onClick={() => navigate("/edit-password")}>
          Change Password
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => navigate("/profile-photo")}>
          Update Profile Picture
          <Dropdown.Divider />
        </Dropdown.Item>
        <Dropdown.Item onClick={() => navigate("/user-enrolledCourses")}>
          Enrolled Courses
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => navigate("/instructor-main-page")}>
          Instructor Panel
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => navigate("/cart")}>
          Cart <span varient="outline-success">🛒</span>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </DropdownButton>
    </>
  );
};

export default UserProfileDropdown;
