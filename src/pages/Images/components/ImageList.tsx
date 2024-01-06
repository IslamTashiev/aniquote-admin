import Modal from "@components/Modal";
import { IImage } from "@models/image";
import { FC, useState } from "react";
import ImageModal from "./ImageModal";
import Loader from "@components/Loader/Loader";

interface ImageListProps {
	imagesList: IImage[];
	isLoading: boolean;
}

const ImageList: FC<ImageListProps> = ({ imagesList, isLoading }) => {
	const [showModal, setShowModal] = useState<IImage | null>(null);

	if (!isLoading)
		return (
			<div className='h-96'>
				<Loader />
			</div>
		);

	return (
		<div className='grid grid-cols-5 gap-3 mt-4'>
			{imagesList.map((image) => (
				<div onClick={() => setShowModal(image)} key={image._id} className='max-w-80 max-h-48 rounded-lg border border-gray-300 flex justify-center items-center'>
					<img className='rounded-lg cursor-pointer w-full h-full object-cover' src={image.image} alt={image.alt} />
				</div>
			))}
			{showModal && (
				<Modal isOpen={!!showModal} onClose={() => setShowModal(null)} title='Image info'>
					<ImageModal image={showModal} setShowModal={setShowModal} />
				</Modal>
			)}
		</div>
	);
};

export default ImageList;
