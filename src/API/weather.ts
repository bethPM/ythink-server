import axios from "axios";
import { weatherConfig } from "../config/dotenv";

const loadWeahterInfo = (lat: string, lon: string) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${weatherConfig.apiKey}`
  );
};

export { loadWeahterInfo };
