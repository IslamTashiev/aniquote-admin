import { IUser } from "@models/user";
import $axios from "@api/axios";

export const login = async (email: string, password: string) => {
	const { data } = await $axios.post("/auth/login", { email, password });
	if (data && "token" in data) {
		localStorage.setItem("token", data.token);
	}
	return data as IUser;
};
export const refresh = async () => {
	const { data } = await $axios.get("/auth/me");
	if (data && "token" in data) {
		localStorage.setItem("token", data.token);
	}
	return data as IUser;
};
export const logout = () => {
	localStorage.removeItem("token");
};
