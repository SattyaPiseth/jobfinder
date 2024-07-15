import axios from "axios";
import { BASE_URL } from "./api";

export const getJobs = async (page, pageSize) => {
  const response = await axios.get(`${BASE_URL}jobs/`, {
    params: {
      page: page,
      pageSize: pageSize,
    },
  });
  return {
    jobs: response.data.results,
    totalJobs: response.data.count,
  };
};

// Fetch job by ID
export const getJobById = async (jobId) => {
  const response = await axios.get(`${BASE_URL}jobs/${jobId}/`);
  console.log(response.data)
  return response.data;
};
