import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import {
  useSearchParams,
  Link,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllCourses } from "../../redux/reducers/userSideCourses/userSideCoursesSlice";
import Loader from "../../components/SharedComponents/Loader";
import Rating from "../../components/SharedComponents/Rating";
import SearchByFilter from "./SearchByFilter";
import PaginationComponent from "./PaginationComponent";

const SearchedCourses = () => {
  const [searchParams] = useSearchParams();

  let keyword = searchParams.get("keyword");
  let averageRating = searchParams.get("averageRating");
  let category = searchParams.get("category");
  let price = searchParams.get("price");
  let page = searchParams.get("page");

  const dispatch = useDispatch();
  const { isLoading, courses, totalCourses } = useSelector(
    (state) => state.userSideCourses
  );

  const navigate = useNavigate();

  let parameters = {
    keyword,
    averageRating,
    price,
    category,
    page,
  };

  const setRatingParam = (value) => {
    parameters.averageRating = value;
    navigate({
      pathname: "/search-courses",
      search: `${createSearchParams(parameters)}`,
    });
  };

  const setCategoryParam = (value) => {
    parameters.category = value;
    navigate({
      pathname: "/search-courses",
      search: `${createSearchParams(parameters)}`,
    });
  };

  const setPriceParam = (value) => {
    parameters.price = value;
    navigate({
      pathname: "/search-courses",
      search: `${createSearchParams(parameters)}`,
    });
  };

  const setPageParam = (value) => {
    parameters.page = value;
    navigate({
      pathname: "/search-courses",
      search: `${createSearchParams(parameters)}`,
    });
  };

  const clearAllFilters = () => {
    parameters.keyword = keyword;
    parameters.category = "";
    parameters.page = page;
    parameters.averageRating = 0;
    parameters.price = 10;

    navigate({
      pathname: "/search-courses",
      search: `${createSearchParams(parameters)}`,
    });
  };

  useEffect(() => {
    dispatch(getAllCourses(parameters));
  }, [keyword, averageRating, category, price, page]);

  return (
    <div style={{ marginTop: "150px" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <Link to="/">
            <Button variant="success" size="sm" className="mb-4">
              Go Back
            </Button>
          </Link>
          <div className="d-flex justify-content-between">
            <h5>You Searched : {keyword}</h5>
            <div>
              <p>Total Available Courses: {totalCourses}</p>
              <p>Matching Results : {courses.length}</p>
            </div>
          </div>
          <Row style={{ marginTop: "50px" }}>
            <Col md={3}>
              <SearchByFilter
                setRatingParam={setRatingParam}
                setPriceParam={setPriceParam}
                setCategoryParam={setCategoryParam}
                averageRating={averageRating}
                category={category}
                price={price}
              />
              <Button
                onClick={clearAllFilters}
                variant="success"
                className="mt-2"
              >
                Clear filters
              </Button>
            </Col>

            <Col md={9}>
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
              {totalCourses > 6 && (
                <PaginationComponent
                  courses={totalCourses}
                  page={page}
                  setPageParam={setPageParam}
                />
              )}
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default SearchedCourses;
