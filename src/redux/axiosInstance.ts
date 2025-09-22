import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_ENVIRONMENT === "development" ? "http://localhost:3000" : import.meta.env.VITE_BASE_URL,
  timeout: 50000,
  withCredentials: true,
});