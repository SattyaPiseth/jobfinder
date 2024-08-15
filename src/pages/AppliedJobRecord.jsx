import React, { useEffect } from "react";
import AppliedJobCardComponent from "../Components/card/AppliedJobCardComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppliedJobs } from "../redux/features/apply-job/applyJobSlice";

function AppliedJobRecord() {
  const dispatch = useDispatch();
  const { appliedJobs, accessToken, isLoading, error } = useSelector(
    (state) => state.applyJobs
  );
  const { user } = useSelector((state) => state?.user);
  

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchAppliedJobs(accessToken));
    }
  }, [accessToken, dispatch]);

  const filterAppliedJobs = appliedJobs?.results?.filter(
    (job) => job.user.id === user?.id
  );
  console.log(filterAppliedJobs);
  
  

  return (
    <div className="mt-20">
        <AppliedJobCardComponent appliedJobs={filterAppliedJobs}/>
    </div>
  );
}

export default AppliedJobRecord;
