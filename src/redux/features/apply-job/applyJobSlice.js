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

export const applyForJob = createAsyncThunk(
  "applyJobs/applyForJob",
  async ({ token, jobId, resume }, { rejectWithValue }) => {
    try {
      const formData = new FormData(); // Initialize FormData
      formData.append("job_id", jobId); // Append job_id
      formData.append("resume", resume); // Append the file

      const response = await axios.post(`${BASE_URL}applied_jobs/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      });
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateAppliedJob = createAsyncThunk(
  "applyJobs/updateAppliedJob",
  async ({ token, appliedJobId, jobId }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${BASE_URL}applied_jobs/${appliedJobId}/`,
        {
          job: jobId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("update-applied-job : ", response.data);
      return response?.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

const appliedJobsSlice = createSlice({
  name: "appliedJobs",
  initialState: {
    loading: false,
    error: null,
    appliedJobs: [], // Store applied jobs if needed
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchAppliedJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAppliedJobs.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.appliedJobs = payload; // Assuming payload is the list of applied jobs
      })
      .addCase(fetchAppliedJobs.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(applyForJob.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(applyForJob.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(applyForJob.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(updateAppliedJob.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(updateAppliedJob.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(updateAppliedJob.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
});

export const { invalidate } = appliedJobsSlice.actions;
export default appliedJobsSlice.reducer;
