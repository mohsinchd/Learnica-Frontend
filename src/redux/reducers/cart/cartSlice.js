import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartService from "./cartServices";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  successMessage: "",
  errorMessage: "",
  cartItems: [],
};

export const getCartItems = createAsyncThunk(
  "cartItems/get",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await cartService.getCartItems(token);
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

export const addToCart = createAsyncThunk(
  "cartItems/add",
  async (courseId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await cartService.addToCart({ courseId, token });
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

export const removeFromCart = createAsyncThunk(
  "cartItems/remove",
  async (courseId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await cartService.removeFromCart({ courseId, token });
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

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.errorMessage = "";
      state.successMessage = "";
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.successMessage = "";
        state.errorMessage = "";
        state.cartItems = action.payload.cartItems.courses;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.successMessage = "";
        state.errorMessage = action.payload;
        state.cartItems = [];
      })
      .addCase(addToCart.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.successMessage = action.payload.message;
        state.errorMessage = "";
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.successMessage = "";
        state.errorMessage = action.payload;
      })
      .addCase(removeFromCart.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.successMessage = action.payload.message;
        state.errorMessage = "";
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.successMessage = "";
        state.errorMessage = action.payload;
      });
  },
});

export const { reset } = cartSlice.actions;
export default cartSlice.reducer;
