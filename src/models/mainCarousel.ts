import { IQuote } from "./quotes";

export interface IMainCarouselItem {
	_id: string;
	anime: string;
	quote: string;
	character: string;
	anime_logo: string;
	anime_bckg: string;
}
export interface IMainCarouselItemDto {
	id: string;
	title: string;
	subtitle: string;
}
export interface IMainCarouselItemData {
	anime_logo: string;
	anime_bckg: string;
	quote: string;
	character: string;
	anime: string;
}
export interface IMainPosterItemRequest {
	quote: string[];
	posterBackground: string;
	titleLogo: string;
	tablePriority: number;
}
export interface IMainPosterItem {
	_id: string;
	quote: IQuote[];
	posterBackground: string;
	titleLogo: string;
	tablePriority: number;
	createdAt: string;
	updatedAt: string;
}
