import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/config";
import { ImageData } from "@models/image";

export const uploadFiles = async (uploaded: ImageData) => {
	let uploadedUrl: string | null = null;
	if (uploaded.file) {
		const storageRef = ref(storage, `images/${uploaded.file.name}`);
		await uploadBytes(storageRef, uploaded.file).then(async (snapshot) => {
			await getDownloadURL(snapshot.ref).then((url) => {
				uploadedUrl = url;
			});
		});
	} else {
		throw Error("You should select image file");
	}
	return uploadedUrl;
};
