import $axios from "@api/axios";

export const getQuotes = async (page: number, limit: number) => {
	const { data } = await $axios("/quotes", { params: { limit, page } });
	return data;
};
