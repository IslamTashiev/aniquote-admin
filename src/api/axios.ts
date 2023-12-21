import axios from "axios";

const $axios = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});
$axios.interceptors.request.use((config) => {
	config.headers.Authorization = localStorage.getItem("token");
	return config;
});

export default $axios;
