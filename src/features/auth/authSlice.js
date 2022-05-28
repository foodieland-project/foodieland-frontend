import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idToken: localStorage.getItem("token") || "",
  isLogged: !!localStorage.getItem("token"),
  expirationTime: localStorage.getItem("expTime") || null,
  userPhoto: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, actions) {
      const { token } = actions.payload;
      const { expirationTime } = actions.payload;
      state.idToken = token;
      state.expirationTime = expirationTime;
      state.isLogged = !!token;
      localStorage.setItem("token", token);
      localStorage.setItem("expTime", expirationTime);
    },
    logout(state) {
      state.idToken = "";
      localStorage.removeItem("token");
      localStorage.removeItem("expTime");
      state.isLogged = false;
    },
    setUserPhoto(state, actions) {
      state.userPhoto = actions.payload;
    },
  },
});

export const { login, logout, setUserPhoto } = authSlice.actions;

export default authSlice.reducer;
