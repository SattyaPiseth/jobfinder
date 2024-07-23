import React, { useState, useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardComponent } from "../feat-jobs/CardComponent";
import { selectDataBySearch, fetchAllJobs } from "../../redux/jobs/jobsSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";

const INITIAL_VISIBLE_JOBS = 8;
const JOBS_INCREMENT = 8;

const PositionCardComponent = ({ jobs, isLoading }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [visibleJobs, setVisibleJobs] = useState(INITIAL_VISIBLE_JOBS);
  const searchResults = useSelector(selectDataBySearch) || [];
  const notificationShown = useRef(false);
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    if (!jobs.length) {
      dispatch(fetchAllJobs()).catch((error) => {
        console.error("Failed to fetch jobs:", error);
      });
    }
  }, [dispatch, jobs]);

  useEffect(() => {
    if (searchResults.length === 0 && !isLoading && !notificationShown.current) {
      if (location.pathname !== previousPath.current) {
        toast.info("No jobs found for your search query.");
        notificationShown.current = true;
      }
    }
  }, [searchResults, isLoading, location]);

  useEffect(() => {
    // Update previousPath on location change
    previousPath.current = location.pathname;
  }, [location]);

  const handleSeeMore = useCallback(() => {
    setVisibleJobs(prevVisible => prevVisible + JOBS_INCREMENT);
  }, []);

  const handleRedirect = () => {
    navigate('/'); // Redirect to home page
  };

  const displayJobs = searchResults.length ? searchResults : jobs;

  return (
    <div className="my-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: visibleJobs }, (_, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-4 animate-pulse">
              <Skeleton height={200} />
            </div>
          ))}
        </div>
      ) : displayJobs.length ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayJobs.slice(0, visibleJobs).map(job => (
              <CardComponent key={job.id} job={job} />
            ))}
          </div>
          {displayJobs.length > visibleJobs && (
            <div className="text-center mt-10">
              <button
                onClick={handleSeeMore}
                className="mx-auto flex items-center px-4 py-2 text-center font-medium text-white bg-primary-800 hover:bg-primary-850 focus:ring-primary-650 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-lg focus:ring-2 whitespace-nowrap"
                  
              >
                See More
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center mt-4 text-lg text-gray-600" aria-live="polite">
          No jobs available at the moment.
        </div>
      )}
    </div>
  );
};

export default React.memo(PositionCardComponent);
