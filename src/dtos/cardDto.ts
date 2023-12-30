import { ICard } from "@models/cards";

export class CardDto {
	id: string;
	title: string;
	subtitle: string;

	constructor(data: ICard) {
		this.id = data._id;
		this.title = data.anime;
		this.subtitle = data.quotes[0].quote + "||lengthOfQuotes=" + data.quotes.length;
	}
}
