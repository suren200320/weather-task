import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_WEATHER_API_URL,
  params: {
    appid: VUE_APP_WEATHER_API_KEY
  },
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
