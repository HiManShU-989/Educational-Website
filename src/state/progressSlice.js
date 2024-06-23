import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEnrolledCourses = createAsyncThunk('progress/fetchEnrolledCourses', async () => {
  const response = await axios.get('/api/enrollments');
  return response.data;
});

const progressSlice = createSlice({
  name: 'progress',
  initialState: {
    enrolledCourses: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchEnrolledCourses.pending]: (state) => {
      state.loading = true;
    },
    [fetchEnrolledCourses.fulfilled]: (state, action) => {
      state.loading = false;
      state.enrolledCourses = action.payload;
    },
    [fetchEnrolledCourses.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default progressSlice.reducer;
