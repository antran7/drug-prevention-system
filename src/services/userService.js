import axiosInstance from "../config/axios";

export const getAllUsers = async () => {
    try {
        const response = await axiosInstance.get('/users');
        console.log(response);
        if (response.data) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
}

export const deleteUserById = async (id) => {
    try {
        const response = await axiosInstance.delete(`/users/${id}`);
        if (response.data) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
}