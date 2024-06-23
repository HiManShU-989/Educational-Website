// src/services/courseService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const getCourses = async () => {
  const response = await axios.get(`${API_URL}/courses`);
  return response.data;
};

const getCourseById = async (courseId) => {
  const response = await axios.get(`${API_URL}/courses/${courseId}`);
  return response.data;
};

const courseService = {
  getCourses,
  getCourseById,
};

export default courseService;
