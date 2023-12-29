import $axios from "@api/axios";
import { IDropdownOption } from "@models/dropdownOption";
import { IMainCarouselItem, IMainCarouselItemData } from "@models/mainCarousel";
import { IQuote } from "@models/quotes";

export const getMainCarouselItems = async () => {
	const { data } = await $axios<IMainCarouselItem[]>("/carousel-items");
	return data;
};
export const getTitles = async () => {
	const { data } = await $axios<IDropdownOption[]>("/quotes/titles");
	return data;
};
export const getQuotesByTitle = async (title: string) => {
	const { data } = await $axios<IQuote[]>(`/quotes/by-title/${title}`);
	return data;
};
export const createNewCarouselItem = async (data: IMainCarouselItemData) => {
	await $axios.post("/create/carousel-item", data);
};
