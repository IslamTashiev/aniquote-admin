import $axios from "@api/axios";
import { ICard } from "@models/cards";
import { IDropdownOption } from "@models/dropdownOption";
import { IMainPosterItem, IMainPosterItemRequest } from "@models/mainCarousel";
import { IQuote } from "@models/quotes";

export const getTitles = async () => {
	const { data } = await $axios<IDropdownOption[]>("/quotes/titles");
	return data;
};
export const getQuotesByTitle = async (title: string) => {
	const { data } = await $axios<IQuote[]>(`/quotes/by-title/${title}`);
	return data;
};
export const getCards = async () => {
	const { data } = await $axios.get<ICard[]>("/anime-cards");
	return data;
};
export const getPosters = async () => {
	const { data } = await $axios.get<IMainPosterItem[]>("/posters");
	return data;
};
export const createNewPoster = async (data: IMainPosterItemRequest) => {
	await $axios.post("/posters", data);
};
