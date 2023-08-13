import axios from "axios";
import { API_URL } from "../../store";

// Register User
const registerUser = async (userData) => {
  const { data } = await axios.post(
    `${API_URL}/api/v1/user/register`,
    userData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  if (data.user) {
    localStorage.setItem("user", JSON.stringify(data.user));
  }

  return data;
};

// Logout User
const logoutUser = async () => {
  const { data } = await axios.get(`${API_URL}/api/v1/user/logout`);

  localStorage.removeItem("user");

  return data;
};

// Login User
const loginUser = async (userData) => {
  const { data } = await axios.post(`${API_URL}/api/v1/user/login`, userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (data.user) {
    localStorage.setItem("user", JSON.stringify(data.user));
  }

  return data;
};

const authService = {
  registerUser,
  logoutUser,
  loginUser,
};

export default authService;
