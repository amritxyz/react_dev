import axios from 'axios';

const API_BASE = 'https://blog-1rng.onrender.com';

const api = axios.create({
	baseURL: API_BASE,
});

// Auth
export const login = (data) => api.post('/auth/login', data);
export const signup = (data) => api.post('/auth/signup', data);

// Courses
export const getAllCourses = () => api.get('/mycourse');
export const createCourse = (data) => api.post('/mycourse/create', data);
export const getCoursesByCategory = (category) => api.get(`/mycourse/category/${category}`);
export const getCourse = (id) => api.get(`/mycourse/${id}`);
export const updateCourse = (id, data) => api.put(`/mycourse/${id}`, data);
export const deleteCourse = (id) => api.delete(`/mycourse/${id}`);

// Categories
export const createCategory = (data) => api.post('/category/create', data);
export const getAllCategories = () => api.get('/category');
export const getCategory = (id) => api.get(`/category/${id}`);
export const updateCategory = (id, data) => api.put(`/category/${id}`, data);
export const deleteCategory = (id) => api.delete(`/category/${id}`);

export default api;
