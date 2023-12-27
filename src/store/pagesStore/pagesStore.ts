import { IMainCarouselItem } from "@models/mainCarousel";
import create from "zustand";
import * as pagesActions from "./pagesActions";

interface IPagesStore {
	mainCarouselItems: IMainCarouselItem[];
	isMainCarouselLoaded: boolean;
	getMainCarouselItems: () => void;
}

export const usePagesStore = create<IPagesStore>((set) => ({
	mainCarouselItems: [],
	isMainCarouselLoaded: false,
	getMainCarouselItems: async () => {
		set({ isMainCarouselLoaded: false, mainCarouselItems: [] });
		const data = await pagesActions.getMainCarouselItems();
		set({ isMainCarouselLoaded: true, mainCarouselItems: data });
	},
}));
