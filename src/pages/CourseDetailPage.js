import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseById, enrollInCourse } from '../state/courseSlice';

const CourseDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const course = useSelector(state => state.courses.selectedCourse);

  useEffect(() => {
    dispatch(fetchCourseById(id));
  }, [dispatch, id]);

  const handleEnroll = () => {
    dispatch(enrollInCourse(id));
  };

  return (
    <div>
      {course ? (
        <>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <button onClick={handleEnroll}>Enroll</button>
        </>
      ) : (
        <p>Loading course details...</p>
      )}
    </div>
  );
};

export default CourseDetailPage;
