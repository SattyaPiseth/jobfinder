// Components/feat-jobs/JobsPage.jsx
import React, { useEffect } from "react";
import { Pagination } from "../Components/card/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobs,
  selectCurrentPage,
  selectPageSize,
} from "../redux/jobs/jobsSlice";
import { CardComponent } from "../Components/feat-jobs/CardComponent";

const JobsPage = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const currentPage = useSelector(selectCurrentPage);
  const pageSize = useSelector(selectPageSize);

  useEffect(() => {
    dispatch(fetchJobs({ page: currentPage, pageSize }));
  }, [dispatch, currentPage, pageSize]);

  return (
    <div
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <h1 className="mt-20 text-blue-600 font-kantumruy text-4xl text-start font-bold">
        Job Listing
      </h1>
      <div className="grid gap-5 mt-10 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {jobs.map((job) => (
          <CardComponent key={job.id} job={job} />
        ))}
      </div>
      <div className="text-center py-10 custom-height">
        <Pagination />
      </div>
    </div>
  );
};

export default JobsPage;
