import { IQuote } from "./quotes";

export interface ICard {
	_id: string;
	anime_bckg: string;
	anime: string;
	quotes: IQuote[];
}
