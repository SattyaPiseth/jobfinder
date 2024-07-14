// pages/JobDetail/JobDetail.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobById, selectJobById } from "../../redux/jobs/jobsSlice";
import JobDetailComponent from "../../Components/card/JobDetailcomponent";

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
    <div>{job ? <JobDetailComponent detail={job} /> : <p>Loading...</p>}</div>
  );
};

export default JobDetail;
