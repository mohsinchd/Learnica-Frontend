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

// Update Password
const updatePassword = async (oldPassword, newPassword, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const data = {
    oldPassword,
    newPassword,
  };

  const response = await axios.put(
    `${API_URL}/api/v1/user/updatePassword`,
    data,
    config
  );

  return response.data;
};
const userService = {
  updateUserInfo,
  userInfo,
  updatePassword,
};

export default userService;
