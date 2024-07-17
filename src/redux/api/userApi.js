import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // Adjust this URL to your actual API endpoint

export const register = (userData) => {
  return axios.post(`http://136.228.158.126:50002/api/register/`, userData);
};

export const login = (userCredentials) => {
  return axios.post(`http://136.228.158.126:50002/api/login/`, userCredentials);
};

export const verifyOtpCode = ({ email, otp_code }) => {
  return axios.post(`http://136.228.158.126:50002/api/verify-otp/`, { email, otp_code });
};

export const getProfile = (token) => {
  return axios.get(`http://136.228.158.126:50002/api/profile/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProfile = (token, profileData) => {
  return axios.put(`http://136.228.158.126:50002/api/profile/`, profileData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const resendOtp = (email) => {
  return axios.post(`${API_URL}resend-otp/`, { email });
};
