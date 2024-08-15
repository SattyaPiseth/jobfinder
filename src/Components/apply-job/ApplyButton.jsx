import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyForJob } from '../../redux/features/apply-job/applyJobSlice';

const ApplyButton = ({ jobId }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.applyJobs);
  const [resume, setResume] = useState(null); // State to handle the selected file

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file); // Set the file in the state
    } else {
      console.error("No file selected");
    }
  };

  const handleApply = () => {
    const token = localStorage.getItem('access'); // Retrieve the token
    if (token && resume) { // Ensure a file is selected
      dispatch(applyForJob({ token, jobId, resume }));
    } else {
      console.error('User is not authenticated or resume not selected.');
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleResumeChange}
        className="resume-input"
      />
      <button
        onClick={handleApply}
        disabled={loading}
        className={`apply-button ${loading ? 'loading' : ''} flex gap-3 justify-center items-center px-7 mt-3 py-3 text-base font-semibold text-white capitalize bg-blue-800 rounded-lg`}
      >
        {loading ? 'Applying...' : 'Apply Now'}
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ApplyButton;
