import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch
import { updatePassword } from "../../redux/reducers/user/userSlice"; // Import the relevant action

const PasswordUpdate = () => {
  const dispatch = useDispatch(); // Initialize useDispatch
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    // Dispatch the updatePassword action with the old and new passwords
    dispatch(updatePassword({ oldPassword, newPassword }));
  };

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="oldPassword">
          <Form.Label>Old Password</Form.Label>
          <Form.Control
            placeholder="Enter Old Password"
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            placeholder="Enter New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="outline-success" className="mt-2" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default PasswordUpdate;
