import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const createNewSection = async (sectionData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.post(
    `${API_URL}/api/v1/section/${sectionData.courseId}`,
    { title: sectionData.title },
    config
  );

  return data;
};

const getAllSections = async (sectionData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `${API_URL}/api/v1/section/${sectionData.courseId}`,
    config
  );

  return data;
};

const editSection = async (sectionData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.put(
    `${API_URL}/api/v1/section/${sectionData.courseId}/${sectionData.sectionId}`,
    { title: sectionData.title },
    config
  );

  return data;
};

const deleteSection = async (sectionData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.delete(
    `${API_URL}/api/v1/section/${sectionData.courseId}/${sectionData.sectionId}`,
    config
  );

  return data;
};

const courseSectionService = {
  createNewSection,
  getAllSections,
  editSection,
  deleteSection,
};

export default courseSectionService;
