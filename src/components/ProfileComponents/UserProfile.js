import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { updateInfo } from "../../redux/reducers/user/userSlice";
import { useDispatch } from "react-redux";

const UserProfile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateInfo({ email, name }));
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            disabled
            placeholder="User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button variant="outline-success" className="mt-2" type="submit">
          Save Changes
        </Button>
      </Form>
    </>
  );
};

export default UserProfile;
