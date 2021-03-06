import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idToken: localStorage.getItem("token") || "",
  isLogged: !!localStorage.getItem("token"),
  userPassword: null,
  expirationTime: localStorage.getItem("expTime") || null,
  userPhoto:
    "https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/panel%2Fblue-avatar.png?alt=media&token=e6785fc7-5ef7-432f-a761-edb9db90437d",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, actions) {
      const { token, expirationTime, userPhoto } = actions.payload;
      state.idToken = token;
      state.userPhoto = userPhoto;
      state.expirationTime = expirationTime;
      state.isLogged = !!token;
      localStorage.setItem("token", token);
      localStorage.setItem("expTime", expirationTime);
    },
    logout(state) {
      state.idToken = "";
      state.password = "";
      state.userPhoto =
        "https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/panel%2Fblue-avatar.png?alt=media&token=e6785fc7-5ef7-432f-a761-edb9db90437d";
      localStorage.removeItem("token");
      localStorage.removeItem("expTime");
      state.isLogged = false;
    },
    setUserPhoto(state, actions) {
      state.userPhoto = actions.payload;
    },
    setUserPassword(state, actions) {
      state.userPassword = actions.payload.userPassword;
    },
  },
});

export const { login, logout, setUserPhoto, setUserPassword } =
  authSlice.actions;

export default authSlice.reducer;
