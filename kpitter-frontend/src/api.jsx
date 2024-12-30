import axios from './axiosConfig';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post('/api/register', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post('/api/login', userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserPosts = async (username) => {
    try {
        const response = await axios.get(`/api/users/${username}/posts`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAllPosts = async () => {
    try {
        const response = await axios.get('/api/posts');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createPost = async (username, postData) => {
    try {
        const response = await axios.post(`/api/users/${username}/posts`, postData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getPost = async (username, postId) => {
    try {
        const response = await axios.get(`/api/users/${username}/posts/${postId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const likePost = async (username, postId) => {
    try {
        const response = await axios.put(`/api/users/${username}/posts/${postId}/like`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const unlikePost = async (username, postId) => {
    try {
        const response = await axios.delete(`/api/users/${username}/posts/${postId}/like`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
