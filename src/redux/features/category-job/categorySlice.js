import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchJobCategories as fetchCategoriesAPI } from "../../api/jobCategoryApi.js";

export const fetchJobCategories = createAsyncThunk(
  "job_category/fetchJobCategories",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchCategoriesAPI();
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const categorySlice = createSlice({
  name: "job_category",
  initialState: {
    job_category: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.job_category = action.payload;
      })
      .addCase(fetchJobCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to load job categories";
      });
  }
});

export default categorySlice.reducer;

// Selectors
export const selectAllJobCategories = (state) => state.category.job_category;
export const getJobCategoriesStatus = (state) => state.category.status;
export const getJobCategoriesError = (state) => state.category.error;
