import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    fetchRecipes(state, actions) {
      state.recipes = actions.payload;
    },
  },
});

export const { fetchRecipes } = recipeSlice.actions;

export default recipeSlice.reducer;
