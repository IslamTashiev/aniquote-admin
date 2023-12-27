import $axios from "@api/axios";
import { IQuoteForm } from "@models/quotes";

export const getQuotes = async (page: number, limit: number) => {
	const { data } = await $axios("/quotes", { params: { limit, page } });
	return data;
};
export const addNewQuote = async (data: IQuoteForm) => {
	await $axios.post("/quotes", data);
};
export const updateQuote = async (data: IQuoteForm, id: string) => {
	await $axios.post(`/quotes/update/${id}`, data);
};
export const deleteQuote = async (id: string) => {
	await $axios.delete(`/quotes/${id}`);
};
