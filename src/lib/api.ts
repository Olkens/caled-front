import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/api", // np. http://localhost:8080
  headers: { "Content-Type": "application/json" },
});

// Automatyczne dołączanie tokenu JWT
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
