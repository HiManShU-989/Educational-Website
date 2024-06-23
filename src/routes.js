import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CourseDetailPage from './pages/CourseDetailPage';
import ProfilePage from './pages/ProfilePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/course/:id" element={<CourseDetailPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      {/* Additional routes */}
    </Routes>
  );
};

export default AppRoutes;
