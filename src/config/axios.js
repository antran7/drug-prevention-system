import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://drug-prevention-api-starter.onrender.com/api",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    }
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === "401") {
            console.log("Unauthorized! Redirecting to login...");
        }
        return Promise.reject(error.response.data);
    }
)

export default axiosInstance;