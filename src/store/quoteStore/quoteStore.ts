import { IQuotes } from "@models/quotes";
import create from "zustand";
import * as quoteActions from "./quoteActions";

interface IQuoteStore {
	quotes: IQuotes | null;
	quotesIsLoaded: boolean;
	page: number;
	limit: number;
	getQuotes: () => void;
	nextPage: () => void;
	prevPage: () => void;
}

export const useQuoteStore = create<IQuoteStore>((set, get) => ({
	quotes: null,
	quotesIsLoaded: false,
	page: 1,
	limit: 6,
	getQuotes: async () => {
		const state = get();
		set({ quotesIsLoaded: false, quotes: null });
		const data = await quoteActions.getQuotes(state.page, state.limit);
		set({ quotes: data, quotesIsLoaded: true });
	},
	nextPage: () => {
		set((state) => ({ page: state.page + 1 }));
		get().getQuotes();
	},
	prevPage: () => {
		set((state) => ({ page: state.page - 1 }));
		get().getQuotes();
	},
}));
