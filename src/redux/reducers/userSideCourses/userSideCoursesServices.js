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

const userSideCoursesService = {
  getAllCourses,
  getCourseDetails,
};

export default userSideCoursesService;
