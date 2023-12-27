import $axios from "@api/axios";
import { IMainCarouselItem } from "@models/mainCarousel";

export const getMainCarouselItems = async () => {
	const { data } = await $axios<IMainCarouselItem[]>("/carousel-items");
	return data;
};
