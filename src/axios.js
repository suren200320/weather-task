import axios from "axios";

const axiosDefaultParams = {
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstanceWeather = axios.create({
  baseURL: `${process.env.VUE_APP_WEATHER_API_URL}/data/2.5`,
  params: {
    appid: process.env.VUE_APP_WEATHER_API_KEY,
  },
  ...axiosDefaultParams,
});

const axiosInstanceGeo = axios.create({
  baseURL: process.env.VUE_APP_GEO_URL,
  params: {
    apiKey: process.env.VUE_APP_GEO_KEY,
  },
  ...axiosDefaultParams,
});

export default { weather: axiosInstanceWeather, geo: axiosInstanceGeo };
