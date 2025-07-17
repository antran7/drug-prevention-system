import axiosInstance from "../config/axios";

export const signInWithEmailAndPassword = async (email, password) => {
    try {
        const loginData = {
            email: email,
            password: password,
        }
        const response = await axiosInstance.post('/auth/login', loginData);
        if (response.data) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user-data", JSON.stringify(response.data.user));
        }
        return response.data;
    } catch (error) {
        console.error("Error: ", error.message);
        throw error;
    }
}

export const registerAccount = async (registerData) => {
    try {
        const response = await axiosInstance.post('/auth/register', registerData);
        if (response.data) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
}

export const sendPasswordResetEmail = async (email) => {
    try {
        const response = await axiosInstance.post('/auth/forgot-password', { email });
        if (response.data) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
}

export const resetPasswordWithToken = async (token) => {
    try {
        await axiosInstance.post(`/auth/reset-password?token=${token}`);
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
}