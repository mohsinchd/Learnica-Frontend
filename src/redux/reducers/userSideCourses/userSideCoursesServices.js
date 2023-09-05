import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const getAllCourses = async () => {
  const { data } = await axios.get(`${API_URL}/api/v1/course`);

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
