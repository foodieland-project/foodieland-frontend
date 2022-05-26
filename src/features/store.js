import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "./article/articleSlice";
import authSlice from "./auth/authSlice";
import recipeSlice from "./recipe/recipeSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    recipes: recipeSlice,
    articles: articleSlice,
  },
});

export default store;
