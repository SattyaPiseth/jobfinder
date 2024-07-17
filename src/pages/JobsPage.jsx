import React, { useEffect } from "react";
import { Pagination } from "../Components/card/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobs,
  selectCurrentPage,
  selectPageSize,
  selectJobs,
  selectTotalJobs,
  setPage,
} from "../redux/jobs/jobsSlice";
import { CardComponent } from "../Components/feat-jobs/CardComponent";
import AOS from 'aos';
import 'aos/dist/aos.css';

const JobsPage = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobs);
  const currentPage = useSelector(selectCurrentPage);
  const pageSize = useSelector(selectPageSize);
  const totalJobs = useSelector(selectTotalJobs);
  const status = useSelector((state) => state.jobs.status);

  useEffect(() => {
    dispatch(fetchJobs({ page: currentPage, pageSize }));
  }, [dispatch, currentPage, pageSize]);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS animations when jobs change
  }, [jobs]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  const totalPages = Math.ceil(totalJobs / pageSize);

  return (
    <div
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <h1 className="mt-20 text-blue-600 font-kantumruy text-4xl text-start font-bold">
        Job Listing
      </h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error loading jobs.</p>}
      <div className="grid gap-5 mt-10 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {jobs.length > 0 ? (
          jobs.map((job) => <CardComponent key={job.id} job={job} />)
        ) : (
          <p>No jobs available</p>
        )}
      </div>
      <div className="text-center py-10">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default JobsPage;
