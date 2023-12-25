export interface IQuotes {
	docs: IQuote[];
	currentPage: string;
	totalPages: number;
	totalDocuments: number;
}

export interface IQuote {
	quote: string;
	character: string;
	_id: string;
	anime: string;
}

export interface IQuoteForm {
	quote: string;
	character: string;
	anime: string;
	animePhotoURL: string;
}
