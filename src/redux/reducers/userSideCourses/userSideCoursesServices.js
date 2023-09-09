import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const getAllCourses = async (params = null) => {
  console.log(params);
  const { data } = await axios.get(
    `${API_URL}/api/v1/course${
      params
        ? `?keyword=${params.keyword}&price[gte]=${params.price}&averageRating[gte]=${params.averageRating}&category=${params.category}&page=${params.page}`
        : ``
    }`
  );

  return data;
};

const getCourseDetails = async (id) => {
  const { data } = await axios.get(`${API_URL}/api/v1/course/${id}`);
  return data;
};

const getAllEnrolledCourses = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(
    `${API_URL}/api/v1/user/enrolledCourses`,
    config
  );

  return data;
};

const getEnrolledCourseDetails = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(
    `${API_URL}/api/v1/user/enrolledCourse/${id}`,
    config
  );

  return data;
};

const userSideCoursesService = {
  getAllCourses,
  getCourseDetails,
  getAllEnrolledCourses,
  getEnrolledCourseDetails,
};

export default userSideCoursesService;
