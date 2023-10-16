import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const getAdminAnalytics = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(`${API_URL}/api/v1/analytics/admin`, config);

  return data;
};

const getAdminUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `${API_URL}/api/v1/analytics/admin/users`,
    config
  );

  return data;
};

const getAdminSingleUser = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `${API_URL}/api/v1/analytics/admin/user/${id}`,
    config
  );

  return data;
};

const getAdminCourses = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `${API_URL}/api/v1/analytics/admin/courses`,
    config
  );

  return data;
};

const getAdminSingleCourse = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `${API_URL}/api/v1/analytics/admin/course/${id}`,
    config
  );

  return data;
};

const adminService = {
  getAdminAnalytics,
  getAdminUsers,
  getAdminSingleUser,
  getAdminCourses,
  getAdminSingleCourse,
};

export default adminService;
