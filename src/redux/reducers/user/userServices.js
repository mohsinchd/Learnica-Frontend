import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = "https://learnica-backend-production.up.railway.app";

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
const updatePassword = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    `${API_URL}/api/v1/user/changePassword`,
    data,
    config
  );

  return response.data;
};

// Update Profile Picture
const updatePicture = async (file, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.put(
    `${API_URL}/api/v1/user/updateProfilePicture`,
    file,
    config
  );

  return data;
};

const userService = {
  updateUserInfo,
  userInfo,
  updatePassword,
  updatePicture,
};

export default userService;
