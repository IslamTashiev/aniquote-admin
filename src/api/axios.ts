import axios from "axios";

const $axios = axios.create({
	baseURL: import.meta.env.BASE_URL,
});

export default $axios;
