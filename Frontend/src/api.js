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
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) =>{
        return Promise.reject(error); //return a promise that is rejected
    }
)

export default api; //export the api instance