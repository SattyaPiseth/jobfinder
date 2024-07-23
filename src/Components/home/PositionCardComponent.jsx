import React, { useState, useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardComponent } from "../feat-jobs/CardComponent";
import { selectDataBySearch, fetchAllJobs } from "../../redux/jobs/jobsSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const INITIAL_VISIBLE_JOBS = 8;
const JOBS_INCREMENT = 8;

const PositionCardComponent = ({ jobs, isLoading }) => {
  const dispatch = useDispatch();
  const [visibleJobs, setVisibleJobs] = useState(INITIAL_VISIBLE_JOBS);
  const searchResults = useSelector(selectDataBySearch) || [];
  const notificationShown = useRef(false);

  useEffect(() => {
    if (!jobs.length) {
      dispatch(fetchAllJobs()).catch((error) => {
        console.error("Failed to fetch jobs:", error);
      });
    }
  }, [dispatch, jobs]);

  useEffect(() => {
    if (searchResults.length === 0 && !isLoading && !notificationShown.current) {
      toast.info("No jobs found for your search query.");
      notificationShown.current = true;
    }
  }, [searchResults, isLoading]);

  const handleSeeMore = useCallback(() => {
    setVisibleJobs(prevVisible => prevVisible + JOBS_INCREMENT);
  }, []);

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
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out shadow-lg"
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
