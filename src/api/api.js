import axios from "axios";

const BASE_URL = "http://37.152.181.124"


const api = axios.create({
  baseURL: BASE_URL,
});

// api.interceptors.request.use(async(config){
//   const token = localStorage.getItem("",)
//   if(token){
//     config.headers = {
//       Authorization : `bearer ${token}`
//     }
//   }
// })

export const registerUser = (data) => api.post("/auth/register", data);
export const loginUser = (data) => api.post("/auth/login", data);
export const getSensorSummary = () => api.get("/sensor-summary");
export const sendControl = (data) => api.post("/get-control", data);

export default api;