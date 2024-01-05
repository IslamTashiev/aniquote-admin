import $axios from "@api/axios";
import { IImage } from "@models/image";

export const getImages = async () => {
	const { data } = await $axios.get<IImage[]>("/image/get-all");
	return data;
};
export const getImageById = async (id: string) => {
	const { data } = await $axios.get<IImage>(`/image/get-one/${id}`);
	return data;
};
export const deleteImage = async (id: string) => {
	await $axios.delete(`/image/delete/${id}`);
};
export const uploadImage = async (alt: string, title: string, image: string) => {
	await $axios.post("/image/upload", { alt, title, image });
};
