import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instructorService from "./instructorServices";

const initialState = {
  isLoading: false,
  isError: false,
  message: "",
  errorMessage: "",
  courses: [],
};

export const createCourse = createAsyncThunk(
  "instructor/newCourse",
  async (courseData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await instructorService.createNewCourse(courseData, token);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getInstCourses = createAsyncThunk(
  "instructor/courses",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await instructorService.getInstructorCourses(token);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const instructorSlice = createSlice({
  name: "instructorSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.message = "";
      state.errorMessage = "";
      state.courses = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.isError = false;
        state.errorMessage = "";
        state.courses = [];
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.message = "";
        state.isError = true;
        state.errorMessage = action.payload;
        state.courses = [];
      })
      .addCase(getInstCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInstCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = action.payload.courses;
      })
      .addCase(getInstCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.courses = [];
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { reset } = instructorSlice.actions;

export default instructorSlice.reducer;
