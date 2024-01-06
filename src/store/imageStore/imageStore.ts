import create from "zustand";
import { IImage, ImageData } from "@models/image";
import * as imageActions from "./imageActions";
import { uploadFiles } from "@utils/uploadAndGetFile";

interface IUseImageStore {
	images: IImage[];
	isImagesLoaded: boolean;
	image: IImage | null;
	isImageLoaded: boolean;
	imageUploaded: boolean;
	getImages: () => void;
	getImageById: (id: string) => void;
	deleteImage: (id: string, imageUrl: string) => void;
	uploadImage: (image: ImageData, alt: string, title: string) => void;
}

export const useImageStore = create<IUseImageStore>((set, get) => ({
	images: [],
	isImagesLoaded: false,
	image: null,
	isImageLoaded: false,
	imageUploaded: true,
	getImages: async () => {
		set({ images: [], isImagesLoaded: false });
		const images = await imageActions.getImages();
		set({ images, isImagesLoaded: true });
	},
	getImageById: async (id) => {
		set({ image: null, isImageLoaded: false });
		const image = await imageActions.getImageById(id);
		set({ image, isImageLoaded: true });
	},
	deleteImage: async (id: string, imageUrl: string) => {
		await imageActions.deleteImage(id, imageUrl);
		get().getImages();
	},
	uploadImage: async (image: ImageData, alt: string, title: string) => {
		set({ imageUploaded: false });
		const imageUrl = await uploadFiles(image);
		await imageActions.uploadImage(alt, title, imageUrl ?? "");
		get().getImages();
		set({ imageUploaded: true });
	},
}));
