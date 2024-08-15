import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyForJob } from '../../redux/features/apply-job/applyJobSlice';

const ApplyButton = ({ jobId, resume }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.applyJobs);

  const handleApply = () => {
    const token = localStorage.getItem('access'); // Retrieve the token
    if (token) {
      dispatch(applyForJob({ token, jobId, resume })); //resume
    } else {
      // Handle no token case
      console.error('User is not authenticated.');
    }
  };

  return (
    <button
      onClick={handleApply}
      disabled={loading}
      className={`apply-button ${loading ? 'loading' : ''} flex gap-3 justify-center items-center px-7 mt-3 py-3 text-base font-semibold text-white capitalize bg-blue-800 rounded-lg`}
    >
      {loading ? 'Applying...' : 'Apply Now'}
      {/* {error && <p className="error-message">{error}</p>} */}
    </button>
  );
};

export default ApplyButton;
