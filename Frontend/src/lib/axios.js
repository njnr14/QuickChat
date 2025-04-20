import axios from "axios";

export const axiosInstance = axios.create({
<<<<<<< HEAD
    baseURL :"http://localhost:3000/api",
=======
    baseURL : import.meta.env.MODE==="development" ? "http://localhost:3000/api" : "/api",
>>>>>>> c4b3bee (completed Project)
    withCredentials: true,
});