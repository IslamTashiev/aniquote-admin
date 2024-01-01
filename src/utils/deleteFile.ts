import { deleteObject, ref } from "firebase/storage";
import { storage } from "../firebase/config";

export const deleteFile = async (filename: string) => {
	if (filename) {
		const fileRef = ref(storage, filename);
		await deleteObject(fileRef);
	}
};
