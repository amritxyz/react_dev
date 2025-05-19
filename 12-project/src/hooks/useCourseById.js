import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = 'https://blog-1rng.onrender.com/mycourse';

export const useCourseById = (id) => {
	return useQuery({
		queryKey: ['course', id],
		queryFn: async () => {
			const response = await axios.get(`${API_URL}/${id}`);
			return response.data;
		},
		enabled: !!id,
	});
};
