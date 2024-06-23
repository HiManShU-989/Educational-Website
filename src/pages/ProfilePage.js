import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEnrolledCourses } from '../state/progressSlice';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector(state => state.progress.enrolledCourses);

  useEffect(() => {
    dispatch(fetchEnrolledCourses());
  }, [dispatch]);

  return (
    <div>
      <h2>Your Profile</h2>
      <h3>Enrolled Courses</h3>
      <ul>
        {enrolledCourses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
      {/* Add a daily granularity graph of completed lessons here */}
    </div>
  );
};

export default ProfilePage;
