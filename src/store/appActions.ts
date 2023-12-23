import $axios from "@api/axios";
import { FormData } from "@models/newAdmin";

export const getAdminsList = async () => {
	const { data } = await $axios("/admins-list");
	return data;
};
export const removeAdmin = async (id: string) => {
	await $axios(`/remove-role/${id}`);
};
export const createNewAdmin = async (params: FormData) => {
	const { data } = await $axios.post("/add-new-admin", params);
	return data;
};
