import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyForJob } from '../../redux/features/apply-job/applyJobSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplyButton = ({ jobId }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.applyJobs);
  const [resume, setResume] = useState(null);
  const [fileError, setFileError] = useState(null);
  const fileInputRef = useRef(null);

  const clearFileInput = () => {
    setResume(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (validTypes.includes(file.type)) {
        setResume(file);
        setFileError(null);
        handleApply(file); 
      } else {
        setFileError('Please upload a valid PDF or DOC file.');
        toast.error('Please upload a valid PDF or DOC file.');
        clearFileInput();  
      }
    }
  };

  const handleApplyClick = () => {
    if (resume) {
      handleApply(resume);  
    } else {
      fileInputRef.current.click(); 
    }
  };

  const handleApply = (resumeFile) => {
    const token = localStorage.getItem('access');
    if (token && resumeFile) {
      dispatch(applyForJob({ token, jobId, resume: resumeFile }))
        .then(() => {
          toast.success('Application submitted successfully!');
          clearFileInput(); 
        })
        .catch(() => {
          toast.error('Failed to submit the application.');
        });
    } else {
      if (!resumeFile) {
        setFileError('Please upload your resume.');
        toast.error('Please upload your resume.');
      }
      if (!token) {
        console.error('User is not authenticated.');
        toast.error('User is not authenticated.');
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        ref={fileInputRef}
        onChange={handleResumeChange}
        className="hidden"
      />
      <button
        onClick={handleApplyClick}
        disabled={loading}
        className={`apply-button ${loading ? 'loading' : ''} flex gap-3 justify-center items-center px-7 mt-3 py-3 text-base font-semibold text-white capitalize bg-blue-800 rounded-lg`}
      >
        {loading ? 'Applying...' : 'Apply Now'}
      </button>
      {fileError && <p className="error-message">{fileError}</p>}
      {error && <p className="error-message">{error}</p>}
      <ToastContainer 
        style={{ marginTop: '80px' }}
      />
    </div>
  );
};

export default ApplyButton;
