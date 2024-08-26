import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticles } from '../../api/fetchArticles';

export const getArticles = createAsyncThunk('articles/getArticles', async () => {
  const articles = await fetchArticles();
  return articles;
});

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    list: [],
    loading: false,
    error: null,
    selectedArticle: null,
  },
  reducers: {
    selectArticle: (state, action) => {
      state.selectedArticle = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectArticle } = articlesSlice.actions;

export default articlesSlice.reducer;
