import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const BasicInfo = () => {
  return (
    <Form>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Your Name .." name="name" />
      </Form.Group>
      <Form.Group controlId="email" className="my-4">
        <Form.Label>Email...</Form.Label>
        <Form.Control placeholder="Your Email.." name="email" type="email" />
      </Form.Group>
      <div className="d-flex gap-3 flex-wrap">
        <Link>
          <Button variant="outline-success">Verify Email</Button>
        </Link>
        <Link>
          <Button variant="outline-success">Save Changes</Button>
        </Link>
        <Link>
          <Button variant="outline-success">Cancel</Button>
        </Link>
      </div>
    </Form>
  );
};

export default BasicInfo;
