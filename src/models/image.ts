export interface IImage {
	_id: string;
	image: string;
	title: string;
	alt: string;
}
export interface ImageData {
	file: File | null;
	warning: string | null;
}
