import { IMainCarouselItem } from "@models/mainCarousel";

export class MainCarouselDto {
	id: string;
	title: string;
	subtitle: string;

	constructor(quote: IMainCarouselItem) {
		this.id = quote._id;
		this.title = quote.character + " • " + quote.anime;
		this.subtitle = quote.quote;
	}
}
