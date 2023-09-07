import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import htmlcss from "../../Images/htmlcss.jpg";
import Rating from "../../components/SharedComponents/Rating";

const Cart = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      <Container>
        <h2>Your Cart..</h2>
        <Row>
          <h6>Total Courses : </h6>
          <Col md={8}>
            <Card
              className="  d-flex flex-row  mt-3 p-2 mb-5"
              style={{ height: "fit-content" }}
            >
              <div className="d-flex ">
                <Card.Img
                  variant="top"
                  src={htmlcss}
                  className="img-fluid"
                  style={{ objectFit: "cover", width: "30%" }}
                />

                <div>
                  <Card.Body>
                    <Card.Title>Course title</Card.Title>
                    <p>Created By : ...</p>
                    <Rating value={4} text={`  reviews`} />
                    <p>Total Lectures :</p>
                    <p>Price: ..</p>
                  </Card.Body>
                </div>
              </div>
              <div className="">
                <Button className="mt-3" variant="outline-success">
                  Remove
                </Button>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <h2 className="text-center">Payment</h2>
            <p className="font-weight-900">Total : </p>
            <h4>$45.0</h4>
            <Button variant="outline-success" className="w-100">
              PAY NOW
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
