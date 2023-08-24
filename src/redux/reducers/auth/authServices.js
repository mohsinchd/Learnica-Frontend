import axios from "axios";

// export const API_URL = "https://learnica-backend-production.up.railway.app";
// export const API_URL = "http://localhost:5000";

const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = "https://learnica-backend-production.up.railway.app";

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
    sessionStorage.setItem("user", JSON.stringify(data.user));
  }

  return data;
};

// Logout User
const logoutUser = async () => {
  const { data } = await axios.get(`${API_URL}/api/v1/user/logout`);

  sessionStorage.removeItem("user");

  return data;
};

// Login User
// Lekin jab aap simple data ko POST request mein bhejte hain jo string ya JSON format mein hota hai,
const loginUser = async (userData) => {
  const { data } = await axios.post(`${API_URL}/api/v1/user/login`, userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (data.user) {
    sessionStorage.setItem("user", JSON.stringify(data.user));
  }

  return data;
};

// Forgot Password
const forgot = async (userEmail) => {
  const { data } = await axios.post(
    `${API_URL}/api/v1/user/forgotPassword`,
    userEmail,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data;
};

// Reset
const reset = async (token, newPassword) => {
  const { data } = await axios.put(
    `${API_URL}/api/v1/user/resetPassword/${token}`,
    { newPassword },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log(data);

  return data;
};

const authService = {
  registerUser,
  logoutUser,
  loginUser,
  forgot,
  reset,
};

export default authService;
