import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Rating from "../../components/SharedComponents/Rating";

const UserReviews = ({ course }) => {
  return (
    <Container className="mt-3">
      <h1>User Reviews</h1>
      <Row>
        {course.reviews.length === 0 && <h3>Not Reviewed yet.</h3>}
        {course.reviews.map((review) => (
          <Col key={review._id} md={6}>
            <Card className="p-3">
              <div className="d-flex">
                <img
                  src={review.user.avatar.url}
                  alt="Error"
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: "50%",
                  }}
                  className="img-fluid me-3"
                />
                <div>
                  <h4>{review.user.name}</h4>
                  <div className="d-flex">
                    <p className="fw-bold me-2">{review.rating}</p>
                    <Rating value={review.rating} />
                  </div>
                </div>
              </div>
              <Card.Text className="mt-3">{review.comment}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserReviews;
