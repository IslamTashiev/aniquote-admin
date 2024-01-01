import { deleteObject, ref } from "firebase/storage";
import { storage } from "../firebase/config";
import { checkFileExistence } from "./checkFileExistence";

export const deleteFile = async (filename: string) => {
	const isImageExist = await checkFileExistence(filename);
	if (filename && isImageExist) {
		const fileRef = ref(storage, filename);
		await deleteObject(fileRef);
	}
};
