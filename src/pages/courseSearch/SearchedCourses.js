import React, { useEffect } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useSearchParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllCourses } from "../../redux/reducers/userSideCourses/userSideCoursesSlice";
import Loader from "../../components/SharedComponents/Loader";
import Rating from "../../components/SharedComponents/Rating";

const SearchedCourses = () => {
  const [searchParams] = useSearchParams();
  let keyword = searchParams.get("keyword");

  const dispatch = useDispatch();
  const { isLoading, courses } = useSelector((state) => state.userSideCourses);

  let parameters = {
    keyword,
  };

  useEffect(() => {
    dispatch(getAllCourses(parameters));
  }, [keyword]);

  return (
    <div style={{ marginTop: "150px" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <div className="d-flex justify-content-between">
            <h5>You Searched : {keyword}</h5>
            <p>Total Results : {courses.length}</p>
          </div>
          <Row style={{ marginTop: "50px" }}>
            <Col md={2}>filters</Col>

            <Col md={10}>
              {courses.length === 0 ? (
                <div> SORRY ! No Course exist ... 😊😊</div>
              ) : (
                <div>
                  {courses.map((course) => {
                    return (
                      <>
                        <Link to={`/courseDetail/${course._id}`}>
                          <Card
                            style={{ width: "", height: "250px" }}
                            className="d-flex flex-row mt-3 p-2"
                            key={course._id}
                          >
                            <Card.Img
                              variant="top"
                              src={course.poster.url}
                              className="img-fluid"
                              style={{ objectFit: "cover", width: "30%" }}
                            />

                            <div>
                              <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <p>Category: {course.category}</p>
                                <p>Created By : {course.instructor.name}</p>
                                <Rating
                                  value={course.averageRating}
                                  text={` ${course.numOfReviews} reviews`}
                                />
                                <p>
                                  Total Lectures :{" "}
                                  {course.sections.reduce(
                                    (acc, section) =>
                                      acc + section.lectures.length,
                                    0
                                  )}
                                </p>
                                <p>Price: ${course.price}</p>
                              </Card.Body>
                            </div>
                          </Card>
                        </Link>
                      </>
                    );
                  })}
                </div>
              )}
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default SearchedCourses;
