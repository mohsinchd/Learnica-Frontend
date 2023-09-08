import React, { useEffect } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cart/cartSlice";

import Rating from "../../components/SharedComponents/Rating";

const BasicCourseDetail = ({ course }) => {
  const { user } = useSelector((state) => state.auth);

  const { isLoading, successMessage, isSuccess, isError, errorMessage } =
    useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const addToCartHandler = () => {
    if (!user) {
      return navigate("/Login");
    }

    dispatch(addToCart(course._id));
  };

  useEffect(() => {
    if (isSuccess && successMessage) {
      toast.success(successMessage);
      navigate("/cart");
    }

    if (isError && errorMessage) {
      toast.error(errorMessage);
    }
  }, [isSuccess, successMessage, isError, errorMessage]);

  return (
    <div
      className=" text-white"
      style={{ backgroundColor: "#2d2f31", padding: "30px", height: "300px" }}
    >
      <Container>
        <Row>
          <Col md={8} className="">
            <h1 className="text-white mb-2">{course.title}</h1>
            <div className="headline mb-3 ">
              The most advanced and modern course on the internet: master
              required skills, and so much more.
            </div>
            <div className="mb-2">
              <Rating
                value={course.averageRating}
                text={`${course.numOfReviews} reviews`}
              />
            </div>
            <div>
              <p>Created By : {course.instructor.name}</p>
            </div>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Img variant="top" src={course.poster.url} />
              <Card.Body className="">
                <h1>${course.price}</h1>
                {user && user._id === course.instructor._id ? (
                  <>
                    <h5>
                      Note: You are the creator of this course you can't buy.
                    </h5>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline-success"
                      className="w-100"
                      style={{ marginBottom: "3px" }}
                      onClick={addToCartHandler}
                    >
                      Add to Cart
                    </Button>
                    <Button variant="outline-success" className="w-100">
                      Buy Now
                    </Button>
                  </>
                )}

                <span>30 days-money back gurantee</span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BasicCourseDetail;
