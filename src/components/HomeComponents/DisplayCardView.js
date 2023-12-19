import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import Rating from "../SharedComponents/Rating";
const DisplayCardView = ({ cardData, children }) => {
  console.log(cardData);
  return (
    <Container className="mt-3 mb-3">
      <h2>{children}</h2>
      <div className="card-container">
        <Row>
          {cardData.map((card) => (
            <Col
              key={card._id}
              md={4}
              style={{ marginBottom: "20px" }}
              className="flex-center"
            >
              <Card style={{ height: "100%" }}>
                <Card.Img
                  src={card.poster && card.poster.url}
                  variant="top"
                  style={{ height: 200, width: "100%" }}
                />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>Price: ${card.price}</Card.Text>
                  <div className="d-flex">
                    <p className="fw-bold me-2">{card.averageRating}</p>
                    <Rating
                      value={card.averageRating}
                      text={` of ${card.numOfReviews} reviews`}
                    />
                  </div>
                  <Link to={`/courseDetail/${card._id}`}>
                    <Button variant="success" className=" text-uppercase my-3">
                      View Details
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default DisplayCardView;
