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
  return response.data;
};


export const getAllJobs = async () => {
  let allJobs = [];
  let page = 1;
  let pageSize = 10;
  let totalJobs = 0;
  let hasMore = true;

  while (hasMore) {
    const response = await axios.get(`${BASE_URL}jobs/`, {
      params: {
        page: page,
        pageSize: pageSize,
      },
    });
    const { results, count } = response.data;
    allJobs = [...allJobs, ...results];
    totalJobs = count;
    hasMore = allJobs.length < totalJobs;
    page += 1;
  }
  return {
    jobs: allJobs,
    totalJobs: totalJobs,
  };
};