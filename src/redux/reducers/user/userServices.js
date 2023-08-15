import { API_URL } from "../auth/authServices";
import axios from "axios";

// Update User Information
const updateUserInfo = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.put(
    `${API_URL}/api/v1/user/me`,
    userData,
    config
  );

  return data;
};

// Get Logged In user info
const userInfo = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`${API_URL}/api/v1/user/me`, config);

  return data;
};

const userService = {
  updateUserInfo,
  userInfo,
};

export default userService;
