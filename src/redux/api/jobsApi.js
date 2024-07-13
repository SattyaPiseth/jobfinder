import axios from "axios";
import { BASE_URL } from "./api";

export const getJobs = async () => {
  const response = await axios.get(`${BASE_URL}jobs/`);
  return response.data.results;
};
