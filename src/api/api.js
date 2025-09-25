import axios from "axios";

const BASE_URL = "https://37.152.181.124/backend";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const registerUser = (data) => axiosPrivate.post("/auth/register", data);
export const loginUser = (data) => api.post("/auth/login", data);
export const getSensorSummary = () => axiosPrivate.get("/sensor-summary");
export const sendControl = (data) => axiosPrivate.post("/get-control", data);
export const getControl = () => axiosPrivate.get("/get-control");
export const getReport = (data) =>
  axiosPrivate.get(
    `/reports?startDate=${data.startDate}&endDate=${data.endDate}`
  );

export default api;
