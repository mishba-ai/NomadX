import axios from 'axios';
import { ACCESS_TOKEN } from './constants';

// Create an axios instance with a baseURL
const api = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
})

api.interceptors.request.use( //interceptors use to add token to the header of the request
    (config )=>{
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) =>{
        return Promise.reject(error); //return a promise that is rejected
    }
)

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const refreshToken = localStorage.getItem('refresh_token');
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/token/refresh/`, {
                    refresh: refreshToken
                });
                localStorage.setItem('access_token', response.data.access);
                api.defaults.headers['Authorization'] = `Bearer ${response.data.access}`;
                return api(originalRequest);
            } catch (refreshError) {
                // Handle refresh token error (e.g., redirect to login)
                console.error('Error refreshing token:', refreshError);
                // Redirect to login or handle as needed
            }
        }
        return Promise.reject(error);
    }
);

export default api; //export the api instance