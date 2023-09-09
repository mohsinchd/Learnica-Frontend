import React, { useEffect } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cart/cartSlice";

import Rating from "../../components/SharedComponents/Rating";

const API_URL = process.env.REACT_APP_API_URL;

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

  const paymentHandler = async (price) => {
    if (!user) {
      return navigate("/Login");
    }

    const {
      data: { apiKey },
    } = await axios.get(`${API_URL}/api/v1/payment`);

    const {
      data: { order },
    } = await axios.post(`${API_URL}/api/v1/payment`, { amount: price });

    var options = {
      key: apiKey, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "USD",
      name: "Learnica",
      description: "Test Transaction",
      image: user.avatar.url,
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `http://localhost:5000/api/v1/payment/paymentVerification?courseId=${course._id}&userId=${user._id}`,
      prefill: {
        name: user.name,
        email: user.email,
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);

    rzp1.open();
  };

  // side effects
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
                    <Button
                      onClick={() => paymentHandler(course.price)}
                      variant="outline-success"
                      className="w-100"
                    >
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
