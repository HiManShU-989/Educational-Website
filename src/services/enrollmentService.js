
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const enrollInCourse = async (courseId) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const response = await axios.post(`${API_URL}/enrollments`, { courseId }, {
    headers: { Authorization: `Bearer ${user.token}` },
  });
  return response.data;
};

const getUserEnrollments = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const response = await axios.get(`${API_URL}/enrollments`, {
    headers: { Authorization: `Bearer ${user.token}` },
  });
  return response.data;
};

const enrollmentService = {
  enrollInCourse,
  getUserEnrollments,
};

export default enrollmentService;
