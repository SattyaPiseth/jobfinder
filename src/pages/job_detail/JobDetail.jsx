import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import JobDetailComponent from "../../Components/card/JobDetailcomponent";
import { fetchJobById, selectJobById } from "../../redux/jobs/jobsSlice";

export default function JobDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const job = useSelector(selectJobById);

  useEffect(() => {
    dispatch(fetchJobById(id));
  }, [dispatch, id]);

  return (
    <div>
      <JobDetailComponent job={job} />
    </div>
  );
}
