import axios from "axios";
import { BASE_URL } from "./api";

// const API_URL = import.meta.env.VITE_API_URL; // Adjust this URL to your actual API endpoint
// console.log('API_URL',API_URL)

export const register = (userData) => {
  return axios.post(`${BASE_URL}register/`, userData);
};

export const login = (userCredentials) => {
  return axios.post(`${BASE_URL}login/`, userCredentials);
};

export const verifyOtpCode = ({ email, otp_code }) => {
  return axios.post(`${BASE_URL}verify-otp/`, { email, otp_code });
};

export const getProfile = (token) => {
  return axios.get(`${BASE_URL}profile/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProfile = (token, profileData) => {
  return axios.put(`${BASE_URL}profile/`, profileData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const resendOtp = (email) => {
  return axios.post(`${BASE_URL}resend-otp/`, { email });
};
