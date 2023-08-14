import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";

const Reset = () => {
  return (
    <div style={{ paddingTop: "150px" }}>
      <Container className="w-50 lh-lg shadow p-5 rounded">
        <Row>
          <Col className="text-center">
            <h2> RESET PASSWRORD</h2>
            <p>
              Please provide the email address you used when you signed up for
              our LEARNICA account.
            </p>

            <Form>
              <Form.Group controlId="forEmail">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  className="mb-3"
                />
              </Form.Group>
              <Button variant="success">
                Send email{" "}
                <span>
                  <AiOutlineArrowRight />
                </span>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reset;
