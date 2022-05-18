import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  isLoading: false,
  user: {
    tokenId: "",
    name: "",
    email: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
