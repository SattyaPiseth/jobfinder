import React, { useEffect } from "react";
import { Pagination } from "../Components/card/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/jobs/jobsSlice";
import { CardComponent } from "../Components/feat-jobs/CardComponent";

const JobsPage = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  console.log("job page", jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div>
      <h1 className="mt-20 text-blue-600 font-kantumruy text-4xl text-start font-bold">
        Job Listing
      </h1>
      <div className="flex flex-wrap gap-10 mt-10 justify-center">
        {jobs.map((job) => (
          <CardComponent key={job.id} job={job} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Pagination />
      </div>
    </div>
  );
};

export default JobsPage;
