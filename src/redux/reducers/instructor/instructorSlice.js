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
});

export const { reset } = instructorSlice.actions;

export default instructorSlice.reducer;
