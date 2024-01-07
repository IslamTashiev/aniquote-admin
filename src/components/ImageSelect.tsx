import { IImage } from "@models/image";
import { useImageStore } from "@store/imageStore/imageStore";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

interface ImageSelectProps {
	selectImage: (image: IImage) => void;
}

const ImageSelect: FC<ImageSelectProps> = ({ selectImage }) => {
	const [selectedImage, setSelectedImage] = useState<IImage | null>(null);
	const [showSelector, setShowSelector] = useState<boolean>(false);

	const { images } = useImageStore((state) => state);

	const handleChoseImage = (image: IImage) => {
		setSelectedImage(image);
		selectImage(image);
		setShowSelector(false);
	};

	return (
		<div className=''>
			<div className='mb-3'>
				<div onClick={() => setShowSelector(!showSelector)} className='flex items-center gap-3 bg-gray-200 p-4 rounded-lg cursor-pointer'>
					{selectedImage ? (
						<>
							<img className='w-28 h-16 object-cover rounded-lg' src={selectedImage.image} alt='' />
							<div>
								<p>
									<span className='font-medium'>Title:</span> {selectedImage.title}
								</p>
								<p>
									<span className='font-medium'>Alt:</span> {selectedImage.alt}
								</p>
							</div>
						</>
					) : (
						<div className='w-full h-20 border rounded-md font-medium text-blue-500 flex justify-center items-center cursor-pointer'>Chose image</div>
					)}
				</div>
			</div>
			{showSelector && (
				<div className='border border-gray-200 rounded-lg'>
					{images.map((image, index) => (
						<label onClick={() => handleChoseImage(image)} className='flex items-center gap-3 hover:bg-gray-200 p-1 pl-4 rounded-lg cursor-pointer' key={image._id}>
							<input type='checkbox' checked={selectedImage?._id === image._id} />
							<img className='w-28 h-16 object-cover rounded-lg' src={image.image} alt='' />
							<div>
								<p>
									<span className='font-medium'>Title:</span> {image.title}
								</p>
								<p>
									<span className='font-medium'>Alt:</span> {image.alt}
								</p>
							</div>
						</label>
					))}
					<Link to='/galary' className='w-full h-20 border border-gray-300 rounded-md font-medium text-blue-500 flex justify-center items-center cursor-pointer'>
						Add other images
					</Link>
				</div>
			)}
		</div>
	);
};

export default ImageSelect;
