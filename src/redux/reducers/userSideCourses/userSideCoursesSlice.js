import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userSideCoursesService from "./userSideCoursesServices";

const initialState = {
  isLoading: true,
  isLoadingDetails: true,
  isError: false,
  isSuccess: false,
  errorMessage: "",
  successMessage: "",
  courses: [],
  courseDetails: null,
  totalCourses: 0,
  enrolledCourses: [],
  enrolledCourseDetails: null,
};

export const getAllCourses = createAsyncThunk(
  "userSideCourses/get",
  async (params, thunkAPI) => {
    try {
      return await userSideCoursesService.getAllCourses(params);
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

export const getAllEnrolledCourses = createAsyncThunk(
  "enrolledCourses/get",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await userSideCoursesService.getAllEnrolledCourses(token);
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

export const getEnrolledCourseDetails = createAsyncThunk(
  "enrolledCourseDetails/get",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await userSideCoursesService.getEnrolledCourseDetails(id, token);
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

export const getCourseDetails = createAsyncThunk(
  "userSideCourse/get:id",
  async (id, thunkAPI) => {
    try {
      return await userSideCoursesService.getCourseDetails(id);
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

const userSideCoursesSlice = createSlice({
  name: "userSideCoursesSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = "";
      state.successMessage = "";
      state.courses = [];
      state.courseDetails = null;
      state.enrolledCourses = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.courses = action.payload.courses;
        state.totalCourses = action.payload.noOfCourses;
        state.successMessage = "Fetched All the courses";
        state.errorMessage = "";
        state.courseDetails = null;
      })
      .addCase(getAllCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.courses = [];
        state.totalCourses = 0;
        state.successMessage = "";
        state.errorMessage = action.payload;
        state.courseDetails = null;
      })
      .addCase(getCourseDetails.pending, (state) => {
        state.isLoadingDetails = true;
      })
      .addCase(getCourseDetails.fulfilled, (state, action) => {
        state.isLoadingDetails = false;
        state.isSuccess = true;
        state.isError = false;
        state.courseDetails = action.payload.course;
      })
      .addCase(getCourseDetails.rejected, (state, action) => {
        state.isLoadingDetails = false;
        state.isError = true;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      .addCase(getAllEnrolledCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllEnrolledCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.enrolledCourses = action.payload.enrolledCourses;
      })
      .addCase(getAllEnrolledCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getEnrolledCourseDetails.pending, (state) => {
        state.isLoadingDetails = true;
      })
      .addCase(getEnrolledCourseDetails.fulfilled, (state, action) => {
        state.isLoadingDetails = false;
        state.isSuccess = true;
        state.isError = false;
        state.enrolledCourseDetails = action.payload.course;
      })
      .addCase(getEnrolledCourseDetails.rejected, (state, action) => {
        state.isLoadingDetails = false;
        state.isError = true;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { reset } = userSideCoursesSlice.actions;
export default userSideCoursesSlice.reducer;
