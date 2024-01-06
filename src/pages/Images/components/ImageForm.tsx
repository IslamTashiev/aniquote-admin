import AddIcon from "@assets/add-admin.svg";
import { ImageData } from "@models/image";
import { useImageStore } from "@store/imageStore/imageStore";
import { cn } from "@utils/cn";
import { FC, useState } from "react";

interface ImageFormProps {
	setShowForm: (showForm: boolean) => void;
}

const ImageForm: FC<ImageFormProps> = ({ setShowForm }) => {
	const [imageData, setImageData] = useState<ImageData>({ file: null, warning: null });
	const [alt, setAlt] = useState<string>("");
	const [title, setTitle] = useState<string>("");

	const { uploadImage, imageUploaded } = useImageStore((state) => state);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (file) {
			if (file.size <= 2000 * 1024) {
				setImageData({ file, warning: null });
			} else {
				setImageData({ file: null, warning: "File size is too large" });
			}
		}
	};
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (imageData.file) {
			uploadImage(imageData, alt, title);
		}
	};

	return (
		<form onSubmit={handleSubmit} className={cn("flex flex-col", { "opacity-60 pointer-events-none": !imageUploaded })}>
			<div>
				<label>
					<span className='block mb-1 font-medium'>Enter image title</span>
					<input value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Title' className='w-full border border-gray-300 rounded-lg px-4 py-2 mb-2 focus:outline-blue-500' />
				</label>
				<label>
					<span className='block mb-1 font-medium'>Enter image alt</span>
					<input value={alt} onChange={(e) => setAlt(e.target.value)} type='text' placeholder='Alt' className='w-full border border-gray-300 rounded-lg px-4 py-2 mb-2 focus:outline-blue-500' />
				</label>
			</div>
			<label>
				<input onChange={handleFileChange} type='file' name='titleLogo' className='hidden' />
				<span className='block mb-1 font-medium'>Select logo (.png, .jpg, .jpeg)</span>
				<div className='w-full h-96 border border-gray-300 rounded-lg flex justify-center items-center cursor-pointer'>
					{imageData.file ? <img className='w-full h-full object-cover rounded-lg' src={URL.createObjectURL(imageData.file)} alt='selected-image' /> : <AddIcon />}
				</div>
				{imageData.warning && <p className='text-red-500'>{imageData.warning}</p>}
			</label>
			<button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4'>
				Upload
			</button>
		</form>
	);
};

export default ImageForm;
