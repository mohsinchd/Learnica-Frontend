import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  getCartItems,
  reset,
  removeFromCart,
} from "../../redux/reducers/cart/cartSlice";

import Rating from "../../components/SharedComponents/Rating";
import Loader from "../../components/SharedComponents/Loader";
import { toast } from "react-hot-toast";

import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const Cart = () => {
  const dispatch = useDispatch();
  const { isLoading, cartItems, isSuccess, successMessage } = useSelector(
    (state) => state.cart
  );
  const { user } = useSelector((state) => state.auth);
  const totalPayment = cartItems.reduce((acc, course) => course.price + acc, 0);

  console.log("total", totalPayment);

  const courseIdString = cartItems.map((course) => course._id).join(",");

  const paymentHandler = async () => {
    try {
      const {
        data: { apiKey },
      } = await axios.get(`${API_URL}/api/v1/payment`);

      const {
        data: { order },
      } = await axios.post(`${API_URL}/api/v1/payment`, {
        amount: totalPayment,
      });

      var options = {
        key: apiKey, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "USD",
        name: "Learnica",
        description: "Test Transaction",
        image: user.avatar.url,
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: `${process.env.REACT_APP_API_URL}/api/v1/payment//multipleVerification?courseId=${courseIdString}&userId=${user._id}`,
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

  useEffect(() => {
    if (isSuccess && successMessage) {
      toast.success(successMessage);
    }

    dispatch(getCartItems());

    return () => {
      dispatch(reset());
    };
  }, [successMessage]);

  return (
    <div style={{ marginTop: "150px" }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <h2>Your Cart</h2>
          <h6>Total Courses : {cartItems.length}</h6>
          <Row>
            <Col md={8}>
              {cartItems.length === 0 && (
                <Alert variant="danger">No Items in the Cart.</Alert>
              )}
              {cartItems.map((item) => (
                <Card
                  className="  d-flex flex-row  mt-3 p-2 "
                  style={{ height: "fit-content" }}
                  key={item._id}
                >
                  <div className="d-flex ">
                    <Card.Img
                      variant="top"
                      src={item.poster && item.poster.url}
                      className="img-fluid"
                      style={{ objectFit: "cover", width: "30%" }}
                    />

                    <div>
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <p>
                          Created By: {item.instructor && item.instructor.name}
                        </p>
                        <Rating
                          value={item.averageRating}
                          text={`${item.numOfReviews} reviews`}
                        />
                        <p>Price: ${item.price}</p>
                      </Card.Body>
                    </div>
                  </div>
                  <div className="">
                    <Button
                      onClick={() => dispatch(removeFromCart(item._id))}
                      className="mt-3"
                      size="sm"
                      variant="success"
                    >
                      Remove
                    </Button>
                  </div>
                </Card>
              ))}
            </Col>
            <Col md={4} className="order-first order-md-last">
              <h2>Payment</h2>
              <p className="font-weight-900">Total Price: </p>
              <h3>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price, 0)
                  .toFixed(2)}
              </h3>
              <Button
                variant="success"
                className="w-100"
                onClick={() => paymentHandler()}
              >
                PAY NOW
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Cart;
