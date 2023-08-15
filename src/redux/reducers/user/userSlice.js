import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userServices";

const initialState = {
  isLoading: true,
  isError: false,
  isSuccess: false,
  message: "",
  user: null,
};

// Update User Info
export const updateInfo = createAsyncThunk(
  "user/updateInfo",
  async (userData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await userService.updateUserInfo(userData, token);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get Current User info
export const getUserInfo = createAsyncThunk(
  "user/info",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await userService.userInfo(token);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async ({ oldPassword, newPassword }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      await userService.updatePassword(oldPassword, newPassword, token);
      return "Password updated successfully.";
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
      state.user = null;
    },
    // updatedAvatarUrl: (state, action) => {
    //   state.user.avatar.url = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(updateInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(getUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.message = "";
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
        state.message = action.payload;
      });
  },
});

export const { reset } = userSlice.actions;

export default userSlice.reducer;
