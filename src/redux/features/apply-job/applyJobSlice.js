import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/api";

// Helper function to extract error message
const getErrorMessage = (error) => {
  return error.response && error.response.data && error.response.data.message
    ? error.response.data.message
    : null;
};

export const fetchAppliedJobs = createAsyncThunk(
  "applyJobs/fetchAppliedJobs",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}applied_jobs/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("apply-jobs : ", response.data);
      return response?.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);


const appliedJobsSlice  = createSlice({
  name: "appliedJobs",
  initialState: {},
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchAppliedJobs.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(fetchAppliedJobs.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(fetchAppliedJobs.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
});

export const { invalidate } = appliedJobsSlice.actions;
export default appliedJobsSlice.reducer;
