import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: API_URL,
});

// Request interceptor to add token to headers
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle errors globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.response?.data?.message || error.message);
  }
);

export const register = (userData) => apiClient.post("register/", userData);
export const login = (userCredentials) =>
  apiClient.post("login/", userCredentials);
export const verifyOtpCode = ({ email, otp_code }) =>
  apiClient.post("verify-otp/", { email, otp_code });
export const getProfile = () => apiClient.get("profile/");
export const updateProfile = (profileData) =>
  apiClient.put("profile/", profileData);
export const resendOtp = (email) => apiClient.post("resend-otp/", { email });
