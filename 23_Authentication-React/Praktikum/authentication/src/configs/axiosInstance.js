import axios from "axios";
// import { CONST } from "../utils/constant";

export const axiosInstance = axios.create({
  baseURL: "https://65563e9a84b36e3a431f6f08.mockapi.io/",
  headers: {},
});

// export const axiosInstance = axios.create({
//   baseURL: CONST.BASE_URL_API,
//   headers: {
//     "app-id": "653ce9a119dd8a83227211b0",
//   },
// });
