import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await axios.get('/api/courses');
  return response.data;
});

export const fetchCourseById = createAsyncThunk('courses/fetchCourseById', async (id) => {
  const response = await axios.get(`/api/courses/${id}`);
  return response.data;
});

export const enrollInCourse = createAsyncThunk('courses/enrollInCourse', async (id) => {
  const response = await axios.post(`/api/enrollments`, { courseId: id });
  return response.data;
});

const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    items: [],
    selectedCourse: null,
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchCourses.pending]: (state) => {
      state.loading = true;
    },
    [fetchCourses.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    [fetchCourses.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [fetchCourseById.pending]: (state) => {
      state.loading = true;
    },
    [fetchCourseById.fulfilled]: (state, action) => {
      state.loading = false;
      state.selectedCourse = action.payload;
    },
    [fetchCourseById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [enrollInCourse.pending]: (state) => {
      state.loading = true;
    },
    [enrollInCourse.fulfilled]: (state) => {
      state.loading = false;
      // Handle successful enrollment (e.g., add course to enrolled list)
    },
    [enrollInCourse.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default courseSlice.reducer;
