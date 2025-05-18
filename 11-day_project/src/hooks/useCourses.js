import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = 'https://blog-1rng.onrender.com/mycourse';

export const useCourses = () => {
	const queryClient = useQueryClient();

	const fetchCourses = async () => {
		const response = await axios.get(API_URL);
		return response.data;
	};


	const { data, isLoading, error } = useQuery({
		queryKey: ['courses'],
		queryFn: fetchCourses,
	});

	console.log(data);

	const createCourse = useMutation({
		mutationFn: async (formData) => {
			const response = await axios.post(`${API_URL}/create`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['courses'] });
		},
	});

	const updateCourse = useMutation({
		mutationFn: async ({ id, courseData }) => {
			const response = await axios.put(`${API_URL}/${id}`, courseData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			return response.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['courses'] });
		},
	});

	const deleteCourse = useMutation({
		mutationFn: async (id) => {
			await axios.delete(`${API_URL}/${id}`);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['courses'] });
		},
	});

	return {
		data,
		isLoading,
		error,
		createCourse,
		updateCourse,
		deleteCourse,
	};
};

export default useCourses;
