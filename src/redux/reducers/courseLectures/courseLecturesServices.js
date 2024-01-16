import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const createNewLecture = async (lectureData, ids, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.post(
    `${API_URL}/api/v1/section/${ids.courseId}/${ids.sectionId}`,
    lectureData,
    config
  );

  return data;
};

const getAllLectures = async (idsData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `${API_URL}/api/v1/section/${idsData.courseId}/${idsData.sectionId}`,
    config
  );

  return data;
};

const editLecture = async (lectureData, ids, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.put(
    `${API_URL}/api/v1/section/${ids.courseId}/${ids.sectionId}/${ids.lectureId}`,
    lectureData,
    config
  );

  return data;
};

const deleteLecture = async (ids, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.delete(
    `${API_URL}/api/v1/section/${ids.courseId}/${ids.sectionId}/${ids.lectureId}`,
    config
  );

  return data;
};

const courseLectureService = {
  createNewLecture,
  getAllLectures,
  editLecture,
  deleteLecture,
};

export default courseLectureService;
