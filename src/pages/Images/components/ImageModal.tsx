import { FC, useState } from "react";
import { IImage } from "@models/image";
import EditIcon from "@assets/edit.svg";
import { cn } from "@utils/cn";
import ConfirmModal from "@components/ConfirmModal";
import { useImageStore } from "@store/imageStore/imageStore";

interface ImageModalProps {
	image: IImage;
	setShowModal: (showModal: IImage | null) => void;
}

const ImageModal: FC<ImageModalProps> = ({ image, setShowModal }) => {
	const [isTitleInputEdited, setIsTitleInputEdited] = useState<boolean>(false);
	const [isAltInputEdited, setIsAltInputEdited] = useState<boolean>(false);
	const [title, setTitle] = useState<string>(image.title);
	const [alt, setAlt] = useState<string>(image.alt);
	const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);

	const { deleteImage } = useImageStore((state) => state);

	const handleDeleteImage = () => {
		deleteImage(image._id, image.image);
		setShowModal(null);
	};

	return (
		<div>
			<img className='rounded-lg max-h-80 mx-auto' src={image.image} alt={image.alt} />
			<div className='mt-3'>
				<label>
					<span className='block mb-1 font-medium'>Image title</span>
					<div className='flex items-center'>
						<input
							readOnly={!isTitleInputEdited}
							defaultValue={image.title}
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							type='text'
							placeholder='Title'
							className={cn("w-full border border-gray-300 rounded-lg px-4 py-2 mb-2 outline-none", { "focus:outline-blue-500": isTitleInputEdited })}
						/>
						<div onClick={() => setIsTitleInputEdited(true)} className='border border-gray-300 rounded-lg px-2 py-2 mb-2 ml-3 cursor-pointer'>
							<EditIcon />
						</div>
					</div>
				</label>
				<label>
					<span className='block mb-1 font-medium'>Image alt</span>
					<div className='flex items-center'>
						<input
							readOnly={!isAltInputEdited}
							defaultValue={image.alt}
							value={alt}
							onChange={(e) => setAlt(e.target.value)}
							type='text'
							placeholder='Alt'
							className={cn("w-full border border-gray-300 rounded-lg px-4 py-2 mb-2 outline-none", { "focus:outline-blue-500": isTitleInputEdited })}
						/>
						<div onClick={() => setIsAltInputEdited(true)} className='border border-gray-300 rounded-lg px-2 py-2 mb-2 ml-3 cursor-pointer'>
							<EditIcon />
						</div>
					</div>
				</label>
				<button className={cn("bg-blue-500 text-white px-4 py-2 rounded-lg mt-4", { "bg-blue-300 pointer-events-none": title === image.title && alt === image.alt })}>Save</button>
				<button onClick={() => setShowConfirmModal(true)} className='bg-red-500 text-white px-4 py-2 rounded-lg mt-4 ml-2'>
					Delete
				</button>
				<ConfirmModal isOpen={showConfirmModal} message='You sure wont delete this image' onClose={() => setShowConfirmModal(false)} onConfirm={handleDeleteImage} title='Delete this image?' />
			</div>
		</div>
	);
};

export default ImageModal;
