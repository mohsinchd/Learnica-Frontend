import React, { useEffect } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LiaChartBarSolid } from "react-icons/lia";
import {
  MdAccessTimeFilled,
  MdCloudDownload,
  MdOutlineOndemandVideo,
} from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi";
import toast from "react-hot-toast";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cart/cartSlice";

import Rating from "../../components/SharedComponents/Rating";

const API_URL = process.env.REACT_APP_API_URL;

const BasicCourseDetail = ({ course }) => {
  const { user } = useSelector((state) => state.auth);

  const { user: userInfo } = useSelector((state) => state.user);

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
      return navigate(`/Login`);
    }
    try {
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
        callback_url: `${process.env.REACT_APP_API_URL}/api/v1/payment/paymentVerification?courseId=${course._id}&userId=${user._id}`,
        prefill: {
          name: user.name,
          email: user.email,
          contact: user.email,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3B3B3B",
        },
      };
      var rzp1 = new window.Razorpay(options);

      rzp1.open();
    } catch (error) {
      toast.error(error.response.data.message);
    }
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
            <div className="d-flex mb-2">
              <p className="fw-bold me-2">{course.averageRating}</p>
              <Rating
                value={course.averageRating}
                text={` of ${course.numOfReviews} reviews`}
              />
            </div>
            <div>
              <p>Created By : {course.instructor.name}</p>
            </div>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={course.poster.url} />
              <Card.Body className="p-4">
                <h1>Course Overview</h1>
                <p className="lead">
                  <LiaChartBarSolid size={30} /> Beginner to Pro
                </p>
                <p className="lead">
                  <MdOutlineOndemandVideo size={30} />{" "}
                  {course.sections.reduce(
                    (acc, sec) => acc + sec.lectures.length,
                    0
                  )}{" "}
                  Lessons
                </p>
                <p className="lead">
                  <MdCloudDownload size={30} /> Downloadable-content
                </p>
                <p className="lead">
                  <HiOutlineNewspaper size={30} /> Hands on Exercises
                </p>
                <p className="lead">
                  <MdAccessTimeFilled size={30} /> Learn at your own pace
                </p>
                <h3>Price: ${course.price}</h3>

                {user && user._id === course.instructor._id ? (
                  <>
                    <h5>
                      Note: You are the creator of this course you can't buy.
                    </h5>
                  </>
                ) : userInfo &&
                  userInfo.enrolledCourses.find(
                    (c) => c.toString() === course._id.toString()
                  ) ? (
                  <h5>You are already enrolled in this course.</h5>
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
