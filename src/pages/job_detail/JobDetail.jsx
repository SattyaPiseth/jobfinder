import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobById, selectJobById } from "../../redux/jobs/jobsSlice";
import JobDetailComponent from "../../Components/card/JobDetailcomponent";
import Metadata from "../../lib/Metadata";


const JobDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const job = useSelector((state) => selectJobById(state, id));

  useEffect(() => {
    if (id) {
      dispatch(fetchJobById(id));
    }
  }, [dispatch, id]);

  return (
    <>
      <Metadata
        title={`${job.title} - Job Finder`}
        description={job.description}
        author="Your Name"
        keywords="jobs, careers, employment"
        thumbnail={job.image || 'https://example.com/og-image.jpg'}
        url={`https://example.com/jobs/${job.id}`}
        type="article"
      />
      {job ? <JobDetailComponent detail={job} /> : <p>Loading...</p>}
    </>
  );
};

export default JobDetail;
