import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

import htmlcss from "../../Images/htmlcss.jpg";
const SearchedCourses = () => {
  const searchedCourse = [1, 2, 3, 4, 5];
  return (
    <div style={{ marginTop: "150px" }}>
      <Container>
        <div className="d-flex justify-content-between">
          <h5>You Searched : ...</h5>
          <p>Total Results : ...</p>
        </div>
        <Row style={{ marginTop: "50px" }}>
          <Col md={2}>filters</Col>
          <Col md={10}>
            {searchedCourse.map((courses) => {
              return (
                <>
                  <Card
                    style={{ width: "", height: "200px" }}
                    className="d-flex flex-row mt-3 p-2"
                  >
                    <Card.Img
                      variant="top"
                      src={htmlcss}
                      className="img-fluid"
                      style={{ objectFit: "cover", width: "30%" }}
                    />

                    <div>
                      <Card.Body>
                        <Card.Title>Course Title</Card.Title>
                        <p>By : name</p>
                        <p>stars</p>
                        <p>Total Hours : ..... Total Lectures : ....</p>
                      </Card.Body>
                    </div>
                  </Card>
                </>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchedCourses;
