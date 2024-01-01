import { getMetadata, ref } from "firebase/storage";
import { storage } from "../firebase/config";

export const checkFileExistence = async (filename: string) => {
	if (filename) {
		try {
			const fileRef = ref(storage, filename);
			await getMetadata(fileRef);
			return true;
		} catch (err) {
			return false;
		}
	}
};
