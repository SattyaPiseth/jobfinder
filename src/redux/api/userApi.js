import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // Adjust this URL to your actual API endpoint

export const register = (userData) => {
  return axios.post(`${API_URL}register/`, userData);
};

export const login = (userCredentials) => {
  return axios.post(`${API_URL}login/`, userCredentials);
};

export const verifyOtpCode = ({ email, otp_code }) => {
  return axios.post(`${API_URL}verify-otp/`, { email, otp_code });
};

export const getProfile = (token) => {
  return axios.get(`${API_URL}profile/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProfile = (token, profileData) => {
  return axios.put(`${API_URL}profile/`, profileData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const resendOtp = (email) => {
  return axios.post(`${API_URL}resend-otp/`, { email });
};
