import { IMainCarouselItem, IMainCarouselItemData } from "@models/mainCarousel";
import create from "zustand";
import * as pagesActions from "./pagesActions";
import { IDropdownOption } from "@models/dropdownOption";
import { IQuote } from "@models/quotes";

interface IPagesStore {
	mainCarouselItems: IMainCarouselItem[];
	isMainCarouselLoaded: boolean;
	titles: IDropdownOption[];
	isTitlesLoaded: boolean;
	quotesByTitle: IQuote[];
	isQuotesByTitleLoaded: boolean;
	getMainCarouselItems: () => void;
	getTitles: () => void;
	getQuotesByTitle: (title: string) => void;
	createNewCarouselItem: (data: IMainCarouselItemData) => void;
	removeCarouselItem: (id: string) => void;
}

export const usePagesStore = create<IPagesStore>((set, get) => ({
	mainCarouselItems: [],
	isMainCarouselLoaded: false,
	titles: [],
	isTitlesLoaded: false,
	quotesByTitle: [],
	isQuotesByTitleLoaded: false,
	getMainCarouselItems: async () => {
		set({ isMainCarouselLoaded: false, mainCarouselItems: [] });
		const data = await pagesActions.getMainCarouselItems();
		set({ isMainCarouselLoaded: true, mainCarouselItems: data });
	},
	getTitles: async () => {
		set({ isTitlesLoaded: false, titles: [] });
		const data = await pagesActions.getTitles();
		set({ isTitlesLoaded: true, titles: data });
	},
	getQuotesByTitle: async (title: string) => {
		set({ isQuotesByTitleLoaded: false, quotesByTitle: [] });
		const data = await pagesActions.getQuotesByTitle(title);
		set({ isQuotesByTitleLoaded: true, quotesByTitle: data });
	},
	createNewCarouselItem: async (data: IMainCarouselItemData) => {
		await pagesActions.createNewCarouselItem(data);
		get().getMainCarouselItems();
	},
	removeCarouselItem: async (id: string) => {
		await pagesActions.removeCarouselItem(id);
		get().getMainCarouselItems();
	},
}));