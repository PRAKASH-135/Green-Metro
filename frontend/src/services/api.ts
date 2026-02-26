import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL + "/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("green_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("green_token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Auth
export const authApi = {
  register: (data: { name: string; email: string; password: string }) =>
    api.post("/auth/register", data),
  login: (data: { email: string; password: string }) =>
    api.post("/auth/login", data),
};

// Trips
export const tripApi = {
  logTrip: (formData: FormData) =>
    api.post("/trips/log", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
};

// Wallet
export const walletApi = {
  getBalance: () => api.get("/wallet"),
};

// Rewards
export const rewardApi = {
  claimReward: () => api.post("/rewards/claim"),
};

export default api;