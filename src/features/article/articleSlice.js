import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    fetchArticles(state, actions) {
      state.articles = actions.payload;
    },
  },
});

export const { fetchArticles } = articleSlice.actions;

export default articleSlice.reducer;
