import axios from 'axios';

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