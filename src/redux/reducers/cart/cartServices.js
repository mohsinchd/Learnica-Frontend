import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const getCartItems = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`${API_URL}/api/v1/cart`, config);

  return data;
};

const addToCart = async (cartData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${cartData.token}`,
    },
  };

  const { data } = await axios.put(
    `${API_URL}/api/v1/cart`,
    { courseId: cartData.courseId },
    config
  );

  return data;
};

const removeFromCart = async (cartData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${cartData.token}`,
    },
  };

  const { data } = await axios.delete(
    `${API_URL}/api/v1/cart/${cartData.courseId}`,
    config
  );

  return data;
};

const cartService = {
  getCartItems,
  addToCart,
  removeFromCart,
};

export default cartService;
