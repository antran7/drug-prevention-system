import axiosInstance from "../config/axios"

export const getAllCourse = async () => {
    try {
        const response = await axiosInstance.get("/courses");
        return response.data;
    } catch (error) {
        console.error("Error fetching courses:", error);
        throw error;
    }
}

export const getCourseById = async (id) => {
    try {
        const response = await axiosInstance.get(`/courses/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching course: ", error);
        throw error;
    }
}

export const createCourse = async (courseData) => {
    try {
        const response = await axiosInstance.post("/courses", courseData);
        return response.data;
    } catch (error) {
        console.error("Error creating course:", error);
        throw error;
    }
}

export const updateCourseById = async (id, newCourseData) => {
    try {
        const response = await axiosInstance.put(`/Course/${id}`, newCourseData);
        return response.data;
    } catch (error) {
        console.error("Error updating course:", error);
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