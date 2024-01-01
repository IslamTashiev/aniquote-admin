import { IMainPosterItem, IMainPosterItemRequest } from "@models/mainCarousel";
import create from "zustand";
import * as pagesActions from "./pagesActions";
import { IDropdownOption } from "@models/dropdownOption";
import { IQuote } from "@models/quotes";
import { ICard } from "@models/cards";
import { deleteFile } from "@utils/deleteFile";

interface IPagesStore {
	titles: IDropdownOption[];
	isTitlesLoaded: boolean;
	quotesByTitle: IQuote[];
	isQuotesByTitleLoaded: boolean;
	cards: ICard[];
	cardsIsLoaded: boolean;
	mainPosters: IMainPosterItem[];
	isMainPostersLoaded: boolean;
	getTitles: () => void;
	getQuotesByTitle: (title: string) => void;
	getCards: () => void;
	getPosters: () => void;
	createNewPoster: (data: IMainPosterItemRequest) => void;
	deletePoster: (id: string) => void;
	updatePoster: (id: string, data: IMainPosterItemRequest) => void;
}

export const usePagesStore = create<IPagesStore>((set, get) => ({
	titles: [],
	isTitlesLoaded: false,
	quotesByTitle: [],
	isQuotesByTitleLoaded: false,
	cards: [],
	cardsIsLoaded: false,
	mainPosters: [],
	isMainPostersLoaded: false,
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
	getCards: async () => {
		set({ cardsIsLoaded: false, cards: [] });
		const data = await pagesActions.getCards();
		set({ cardsIsLoaded: true, cards: data });
	},
	getPosters: async () => {
		set({ isMainPostersLoaded: false, mainPosters: [] });
		const data = await pagesActions.getPosters();
		set({ isMainPostersLoaded: true, mainPosters: data });
	},
	createNewPoster: async (data: IMainPosterItemRequest) => {
		await pagesActions.createNewPoster(data);
		get().getPosters();
	},
	deletePoster: async (id: string) => {
		const { mainPosters } = get();
		const deletedPoster = mainPosters.find((poster) => poster._id === id);
		if (deletedPoster) {
			await deleteFile(deletedPoster.posterBackground);
			await deleteFile(deletedPoster.titleLogo);
		}
		await pagesActions.deletePoster(id);
		get().getPosters();
	},
	updatePoster: async (id: string, data: IMainPosterItemRequest) => {
		const { mainPosters } = get();
		const updatedPoster = mainPosters.find((poster) => poster._id === id);
		if (updatedPoster) {
			updatedPoster.posterBackground !== data.posterBackground ? await deleteFile(updatedPoster.posterBackground) : null;
			updatedPoster.titleLogo !== data.titleLogo ? await deleteFile(updatedPoster.titleLogo) : null;
		}
		await pagesActions.updatePoster(id, data);
		get().getPosters();
	},
}));
