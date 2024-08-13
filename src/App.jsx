// src/App.jsx
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobCategories,
  selectAllJobCategories,
  getJobCategoriesStatus,
} from "./redux/features/category-job/categorySlice";
import HomePage from "./pages/HomePage";
import "./App.css";
import Metadata from "./lib/Metadata";
import useThrottleScroll from "./common/useThrottleScroll";
import { fetchAllJobs, selectAllJobs } from "./redux/jobs/jobsSlice";
import { fetchAppliedJobs } from "./redux/features/apply-job/applyJobSlice";

function App() {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllJobCategories);
  const jobs = useSelector(selectAllJobs);
  const status = useSelector(getJobCategoriesStatus);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchJobCategories());
      dispatch(fetchAllJobs());
      // dispatch(fetchAppliedJobs(localStorage.getItem("access")));
    }
  }, [status, dispatch]);

  const saveScrollPosition = useCallback(() => {
    localStorage.setItem("scrollPosition", window.scrollY);
  }, []);

  useThrottleScroll(saveScrollPosition, 200);

  useEffect(() => {
    const savedPosition = localStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
    }
  }, []);

  return (
    <>
      <Metadata
        // title="JOB QUICK"
        description="Job Quick, established in 2024 by a group of ambitious undergraduate students from the Center for Advanced Science and Technology Development, is an innovative online platform designed to simplify the job search process. Our platform empowers users to effortlessly find, apply to, and track job opportunities, making the job search experience more streamlined and efficient."
        author="Job Quick Team"
        keywords="job search, apply jobs, job tracking, employment, careers, job opportunities, job portal, online jobs, Job Quick"
        thumbnail="https://job-quick-api.techinsights.guru/media/uploads/hero-section_LEi7MwS.png"
        url="https://jobquick.techinsights.guru/"
        type="website"
      />
      <HomePage
        categories={categories}
        isLoading={status === "loading"}
        jobs={jobs}
      />
    </>
  );
}

export default App;
