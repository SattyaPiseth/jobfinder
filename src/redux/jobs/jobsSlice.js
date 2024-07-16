// redux/jobs/jobsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getJobById, getJobs } from "../api/jobsApi";
import { BASE_URL } from "../api/api";

const getErrorMessage = (error) => {
  return error.response && error.response.data && error.response.data.message
    ? error.response.data.message
    : error.message;
};

export const fetchJobById = createAsyncThunk(
  "jobs/fetchJobById",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getJobById(id);
      return data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async ({ page, pageSize }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}jobs/?page=${page}&page_size=${pageSize}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    job: null,
    status: "idle",
    error: null,
    totalJobs: 0,
    currentPage: 1,
    pageSize: 20,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.jobs = action.payload.results; // Adjust based on API response
        state.totalJobs = action.payload.count; // Adjust based on API response
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchJobById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.job = action.payload;
      })
      .addCase(fetchJobById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setPage } = jobsSlice.actions;
export default jobsSlice.reducer;
export const selectJobById = (state) => state.jobs.job;
export const selectJobs = (state) => state.jobs.jobs;
export const selectTotalJobs = (state) => state.jobs.totalJobs;
export const selectCurrentPage = (state) => state.jobs.currentPage;
export const selectPageSize = (state) => state.jobs.pageSize;
