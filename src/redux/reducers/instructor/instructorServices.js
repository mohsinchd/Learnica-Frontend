import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const createNewCourse = async (courseData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.post(
    `${API_URL}/api/v1/course`,
    courseData,
    config
  );

  console.log(data);

  return data;
};

const getInstructorCourses = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `${API_URL}/api/v1/course/instructor/courses`,
    config
  );

  return data;
};

const instructorService = {
  createNewCourse,
  getInstructorCourses,
};

export default instructorService;
