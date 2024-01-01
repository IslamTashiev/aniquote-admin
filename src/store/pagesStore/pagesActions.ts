import $axios from "@api/axios";
import { ICard, ICardRequest } from "@models/cards";
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
export const createNewCard = async (data: ICardRequest) => {
	await $axios.post("/create/anime-card", data);
};
export const deleteCard = async (id: string) => {
	await $axios.delete(`/delete/anime-card/${id}`);
};
export const updateCard = async (id: string, data: ICardRequest) => {
	await $axios.post(`/update/anime-card/${id}`, data);
};
export const getPosters = async () => {
	const { data } = await $axios.get<IMainPosterItem[]>("/posters");
	return data;
};
export const createNewPoster = async (data: IMainPosterItemRequest) => {
	await $axios.post("/posters", data);
};
export const deletePoster = async (id: string) => {
	await $axios.delete(`/posters/delete/${id}`);
};
export const updatePoster = async (id: string, data: IMainPosterItemRequest) => {
	await $axios.post(`/posters/update/${id}`, data);
};
