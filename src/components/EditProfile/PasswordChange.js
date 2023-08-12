import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const PasswordChange = () => {
  return (
    <Form>
      <Form.Group controlId="currentpassword">
        <Form.Label>Current Password</Form.Label>
        <Form.Control
          type="password "
          placeholder="old Password"
          name="old password"
        />
      </Form.Group>
      <Form.Group controlId="newpassword" className="my-4">
        <Form.Label>Current Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="New Password"
          name="newpassword"
        />
        <Form.Text className="text-muted ">
          Your password must be 10 characters or more, and have at least 8
          unique characters. It can't be your name or email address.
        </Form.Text>
      </Form.Group>
      <div className="d-flex gap-5 flex-wrap">
        <Link>
          <Button variant="outline-success">Save</Button>
        </Link>

        <Link>
          <Button variant="outline-success">Cancel</Button>
        </Link>
      </div>
    </Form>
  );
};

export default PasswordChange;
