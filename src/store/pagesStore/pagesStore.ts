import { IMainCarouselItem, IMainCarouselItemData, IMainPosterItem, IMainPosterItemRequest } from "@models/mainCarousel";
import create from "zustand";
import * as pagesActions from "./pagesActions";
import { IDropdownOption } from "@models/dropdownOption";
import { IQuote } from "@models/quotes";
import { ICard } from "@models/cards";

interface IPagesStore {
	mainCarouselItems: IMainCarouselItem[];
	isMainCarouselLoaded: boolean;
	titles: IDropdownOption[];
	isTitlesLoaded: boolean;
	quotesByTitle: IQuote[];
	isQuotesByTitleLoaded: boolean;
	cards: ICard[];
	cardsIsLoaded: boolean;
	mainPosters: IMainPosterItem[];
	getMainCarouselItems: () => void;
	getTitles: () => void;
	getQuotesByTitle: (title: string) => void;
	createNewCarouselItem: (data: IMainCarouselItemData) => void;
	removeCarouselItem: (id: string) => void;
	getCards: () => void;
	getPosters: () => void;
	createNewPoster: (data: IMainPosterItemRequest) => void;
}

export const usePagesStore = create<IPagesStore>((set, get) => ({
	mainCarouselItems: [],
	isMainCarouselLoaded: false,
	titles: [],
	isTitlesLoaded: false,
	quotesByTitle: [],
	isQuotesByTitleLoaded: false,
	cards: [],
	cardsIsLoaded: false,
	mainPosters: [],
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
	getCards: async () => {
		set({ cardsIsLoaded: false, cards: [] });
		const data = await pagesActions.getCards();
		set({ cardsIsLoaded: true, cards: data });
	},
	getPosters: async () => {
		const data = await pagesActions.getPosters();
		set({ mainPosters: data });
	},
	createNewPoster: async (data: IMainPosterItemRequest) => {
		await pagesActions.createNewPoster(data);
		get().getPosters();
	},
}));
