import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getJobById, getJobs } from '../api/jobsApi';
import { BASE_URL } from '../api/api';

// Helper function to extract error message
const getErrorMessage = (error) => {
  return error.response && error.response.data && error.response.data.message
    ? error.response.data.message
    : null;
};

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (_, { rejectWithValue }) => {
    try {
      const jobs = await getJobs();
      return jobs;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const fetchJobById = createAsyncThunk(
  'jobs/fetchJobById', 
  async (id, {rejectWithValue}) =>  {
    try{
      const data = await getJobById(id);
      console.log("Jobs ById: ", data);
      return data.results;
    } catch (error){
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    job: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Adjusted to use action.payload for error
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
        state.error = action.payload; // Adjusted to use action.payload for error
      });
  },
});

export default jobsSlice.reducer;
export const selectJobById = (state) => state.jobs.job;
