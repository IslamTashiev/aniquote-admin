import $axios from "@api/axios";

export const getAdminsList = async () => {
	const { data } = await $axios("/admins-list");
	return data;
};
export const removeAdmin = async (id: string) => {
	await $axios(`/remove-role/${id}`);
};
