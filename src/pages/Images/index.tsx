import Header from "@components/Header";
import ImageList from "./components/ImageList";
import { useEffect, useState } from "react";
import ImageForm from "./components/ImageForm";
import { useImageStore } from "@store/imageStore/imageStore";

const Images = () => {
	const [showForm, setShowForm] = useState<boolean>(false);

	const { images, getImages, isImagesLoaded } = useImageStore((state) => state);

	useEffect(() => {
		getImages();
	}, [getImages]);

	const handleAddNewItem = () => {
		setShowForm(!showForm);
	};
	return (
		<div className='px-11 mt-3'>
			<Header addButtonHandler={handleAddNewItem} />
			{showForm ? <ImageForm setShowForm={setShowForm} /> : <ImageList imagesList={images} isLoading={isImagesLoaded} />}
		</div>
	);
};

export default Images;
