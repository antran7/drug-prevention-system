import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://684f8c28e7c42cfd179502d0.mockapi.io/api",
    headers: {
        "Content-Type": "application/json",
    }
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access_token");
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
        return Promise.reject(error);
    }
)

export default axiosInstance;