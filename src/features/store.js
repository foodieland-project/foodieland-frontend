import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import recipeSlice from "./recipe/recipeSlice";

const store = configureStore({
  reducer: { auth: authSlice, recipes: recipeSlice },
});

export default store;
