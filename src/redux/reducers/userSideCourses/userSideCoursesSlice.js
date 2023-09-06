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
        state.successMessage = "Fetched All the courses";
        state.errorMessage = "";
        state.courseDetails = null;
      })
      .addCase(getAllCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.courses = [];
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
      });
  },
});

export const { reset } = userSideCoursesSlice.actions;
export default userSideCoursesSlice.reducer;
