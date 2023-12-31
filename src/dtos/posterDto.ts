import { IMainPosterItem } from "@models/mainCarousel";

export class PosterDto {
	id;
	title;
	subtitle;

	constructor(data: IMainPosterItem) {
		this.id = data._id;
		this.title = data.quote[0].character + " • " + data.quote[0].anime;
		this.subtitle = data.quote[0].quote;
	}
}
