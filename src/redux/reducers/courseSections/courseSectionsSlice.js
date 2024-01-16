import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import courseSectionService from "./courseSectionsServices";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: "",
  successMessage: "",
  sections: [],
};

export const createSection = createAsyncThunk(
  "courseSection/create",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await courseSectionService.createNewSection(data, token);
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

export const editSection = createAsyncThunk(
  "courseSection/edit",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await courseSectionService.editSection(data, token);
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

export const deleteSection = createAsyncThunk(
  "courseSection/delete",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await courseSectionService.deleteSection(data, token);
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

export const getSections = createAsyncThunk(
  "courseSection/get",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await courseSectionService.getAllSections(data, token);
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

const courseSectionsSlice = createSlice({
  name: "courseSectionsSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.successMessage = "";
      state.errorMessage = "";
      state.sections = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSection.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSection.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.successMessage = action.payload.message;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(createSection.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.successMessage = "";
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getSections.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSections.fulfilled, (state, action) => {
        state.isLoading = false;
        state.sections = action.payload.sections;
      })
      .addCase(getSections.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(editSection.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editSection.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.successMessage = action.payload.message;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(editSection.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.successMessage = "";
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(deleteSection.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteSection.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.successMessage = action.payload.message;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(deleteSection.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.successMessage = "";
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { reset } = courseSectionsSlice.actions;
export default courseSectionsSlice.reducer;
