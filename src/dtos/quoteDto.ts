import { IQuote } from "@models/quotes";

export interface IQuoteDto {
	id: string;
	title: string;
	subtitle: string;
}

export class QuoteDto {
	id: string;
	title: string;
	subtitle: string;

	constructor(quote: IQuote) {
		this.id = quote._id;
		this.title = quote.anime;
		this.subtitle = quote.quote;
	}
}
