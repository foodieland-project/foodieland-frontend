import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  categories: {},
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    fetchRecipes(state, actions) {
      state.recipes = actions.payload;
    },
    selectCategory(state, actions) {
      state.categories = {
        breakfast: false,
        vegan: false,
        meat: false,
        dessert: false,
        lunch: false,
        chocolate: false,
      };
      state.categories[actions.payload] = !state.categories[actions.payload];
    },
    resetCategories(state) {
      state.categories = {
        breakfast: false,
        vegan: false,
        meat: false,
        dessert: false,
        lunch: false,
        chocolate: false,
      };
    },
  },
});

export const { fetchRecipes, selectCategory, resetCategories } =
  recipeSlice.actions;

export default recipeSlice.reducer;
