import React from "react";
import { Carousel, Container, Card, Button, Row, Col } from "react-bootstrap";
const DisplayCardView = ({ cardData, children }) => {
  return (
    <Carousel>
      <Container className="mt-3 mb-3">
        <Card className="p-3">
          <h2>{children}</h2>
          <div className="card-container">
            <Row>
              {cardData.map((card, index) => (
                <Col
                  key={index}
                  md={3}
                  style={{ marginBottom: "20px" }}
                  className="flex-center"
                >
                  <Card style={{ height: "100%" }}>
                    <Card.Img
                      src={card.imageUrl}
                      fluid
                      variant="top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.content}</Card.Text>
                      <Button variant="primary" className="mb-1">
                        Enroll
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Card>
      </Container>
    </Carousel>
  );
};

export default DisplayCardView;
