import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api";

export const fetchJobCategories = createAsyncThunk(
  "job_category/fetchJobCategories",
  async () => {
    const response = await fetch(`${BASE_URL}job_categories/`);
    if (!response.ok) {
      throw new Error("Failed to fetch job categories");
    }
    const data = await response.json();
    console.log("data: ", data.results);
    return data.results;
  }
);

const categorySlice = createSlice({
  name: "job_category",
  initialState: {
    job_category: [],
    status: "idle",
    error: null,
  },
  reducers: {},
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
        state.error = action.error.message;
      });
  }
});

export default categorySlice.reducer;
export const selectAllJobCategories = (state) => state.category.job_category;
export const getJobCategoriesStatus = (state) => state.category.status;
export const getJobCategoriesError = (state) => state.category.error;
