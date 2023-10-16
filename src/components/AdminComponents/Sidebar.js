import React from "react";
import { Card, Button } from "react-bootstrap";
import { MdOutlineAnalytics } from "react-icons/md";
import { SiSololearn } from "react-icons/si";
import { PiUsersDuotone } from "react-icons/pi";
import { MdSlowMotionVideo } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SmallLoader from "../SharedComponents/SmallLoader";
import { reset } from "../../redux/reducers/user/userSlice";
import { logout } from "../../redux/reducers/auth/authSlice";

const Sidebar = () => {
  const { user, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  return (
    <Card className="bg-dark text-light py-3" style={{ height: "100%" }}>
      <NavLink to="/admin/analytics">
        <Card.Header className="text-center pb-3 text-light">
          <h4>
            <SiSololearn size={25} className="text-success" /> LEARNICA
          </h4>
        </Card.Header>
      </NavLink>
      <Card.Body className="text-light">
        <div className="mb-2">
          <NavLink
            to="/admin/analytics"
            className={({ isActive, isPending }) =>
              isPending
                ? "d-flex nav-link p-3 rounded align-items-center justify-content-between"
                : isActive
                ? "d-flex text-light nav-link bg-success p-3 rounded align-items-center justify-content-between"
                : "d-flex nav-link p-3 rounded align-items-center justify-content-between"
            }
          >
            <MdOutlineAnalytics size={30} />
            <h6 className="m-0">Analytics</h6>
          </NavLink>
        </div>

        <div className="mb-2">
          <NavLink
            to="/admin/users"
            className={({ isActive, isPending }) =>
              isPending
                ? "d-flex nav-link p-3 rounded align-items-center justify-content-between"
                : isActive
                ? "d-flex text-light nav-link bg-success p-3 rounded align-items-center justify-content-between"
                : "d-flex nav-link p-3 rounded align-items-center justify-content-between"
            }
          >
            <PiUsersDuotone size={30} />
            <h6 className="m-0">Users</h6>
          </NavLink>
        </div>

        <div className="mb-2">
          <NavLink
            to="/admin/courses"
            className={({ isActive, isPending }) =>
              isPending
                ? "d-flex nav-link p-3 rounded align-items-center justify-content-between"
                : isActive
                ? "d-flex text-light nav-link bg-success p-3 rounded align-items-center justify-content-between"
                : "d-flex nav-link p-3 rounded align-items-center justify-content-between"
            }
          >
            <MdSlowMotionVideo size={30} />
            <h6 className="m-0">Courses</h6>
          </NavLink>
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="d-flex p-3 justify-content-between align-items-center">
          {isLoading || !user ? (
            <SmallLoader />
          ) : (
            <div>
              <img
                src={user.avatar.url}
                alt="Error"
                className="img-fluid rounded-circle mb-2"
                style={{
                  width: 50,
                  height: 50,
                }}
              />
              <span className="ms-3">{user.name}</span>
            </div>
          )}
        </div>
        <div className="text-end">
          <Button onClick={handleLogout} variant="success" size="sm">
            Logout
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Sidebar;
