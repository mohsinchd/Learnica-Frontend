import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import courseReviewServices from "./courseReviewsServices";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  successMessage: "",
  errorMessage: "",
  reviews: [],
};

export const addNewReview = createAsyncThunk(
  "courseReview/create",
  async (reviewData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await courseReviewServices.createNewReview(reviewData, token);
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

export const getAllReviews = createAsyncThunk(
  "courseReview/get",
  async (id, thunkAPI) => {
    try {
      return await courseReviewServices.getAllReviews(id);
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

const courseReviewSlice = createSlice({
  name: "courseReviewSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.successMessage = "";
      state.errorMessage = "";
      state.reviews = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.successMessage = action.payload.message;
        state.errorMessage = "";
        state.reviews = [];
      })
      .addCase(addNewReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.successMessage = "";
        state.errorMessage = action.payload;
        state.reviews = [];
      })
      .addCase(getAllReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.successMessage = "";
        state.errorMessage = "";
        state.reviews = action.payload.reviews;
      })
      .addCase(getAllReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.successMessage = "";
        state.errorMessage = action.payload;
        state.reviews = [];
      });
  },
});

export const { reset } = courseReviewSlice.actions;

export default courseReviewSlice.reducer;
