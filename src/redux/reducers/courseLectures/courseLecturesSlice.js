import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import courseLectureService from "./courseLecturesServices";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: "",
  successMessage: "",
  lectures: [],
};

export const createLecture = createAsyncThunk(
  "courseLecture/create",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await courseLectureService.createNewLecture(
        data.lectureData,
        data.ids,
        token
      );
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

export const editLectureThunk = createAsyncThunk(
  "courseLecture/edit",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await courseLectureService.editLecture(
        data.lectureData,
        data.ids,
        token
      );
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

export const deleteLectureThunk = createAsyncThunk(
  "courseLecture/delete",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await courseLectureService.deleteLecture(data.ids, token);
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

export const getLectures = createAsyncThunk(
  "courseLectures/get",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await courseLectureService.getAllLectures(data, token);
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

const courseLectureSlice = createSlice({
  name: "courseLectureSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.successMessage = "";
      state.errorMessage = "";
      state.lectures = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createLecture.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createLecture.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.successMessage = action.payload.message;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(createLecture.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.successMessage = "";
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getLectures.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLectures.fulfilled, (state, action) => {
        state.isLoading = false;
        state.lectures = action.payload.lectures;
      })
      .addCase(getLectures.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(editLectureThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editLectureThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.successMessage = action.payload.message;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(editLectureThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.successMessage = "";
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(deleteLectureThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteLectureThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.successMessage = action.payload.message;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(deleteLectureThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.successMessage = "";
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { reset } = courseLectureSlice.actions;

export default courseLectureSlice.reducer;
