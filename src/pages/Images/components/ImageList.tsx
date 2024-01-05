import { IImage } from "@models/image";
import { FC } from "react";

interface ImageListProps {
	imagesList: IImage[];
}

const ImageList: FC<ImageListProps> = ({ imagesList }) => {
	return (
		<div className='grid grid-cols-5 gap-3 mt-4'>
			{imagesList.map((image) => (
				<div key={image._id} className='max-w-80 max-h-48 rounded-lg border border-gray-300 flex justify-center items-center'>
					<img className='rounded-lg cursor-pointer w-full h-full object-cover' src={image.image} alt={image.alt} />
				</div>
			))}
		</div>
	);
};

export default ImageList;
