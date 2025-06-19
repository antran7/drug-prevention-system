import axiosInstance from "../config/axios"

export const getAllCourse = async () => {
    try {
        const response = await axiosInstance.get("/Course");
        return response.data;
    } catch (error) {
        console.error("Error fetching courses:", error);
        throw error;
    }
}

export const createCourse = async (courseData) => {
    try {
        const response = await axiosInstance.post("/Course", courseData);
        return response.data;
    } catch (error) {
        console.error("Error creating course:", error);
        throw error;
    }
}

export const deleteCourse = async (id) => {
    try {
        const response = await axiosInstance.delete(`/Course/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting course:", error);
        throw error;
    }
}