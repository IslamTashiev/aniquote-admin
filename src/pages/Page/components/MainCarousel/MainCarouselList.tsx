import Header from "@components/Header";
import List from "@components/List";
import { IMainCarouselItemDto } from "@models/mainCarousel";
import { usePagesStore } from "@store/pagesStore/pagesStore";
import { useEffect, useState } from "react";
import { MainCarouselDto } from "../../../../dtos/mainCatouselDto";
import Modal from "@components/Modal";
import CarouselForm from "./CarouselForm";

const MainCarouselList = () => {
	const [listItems, setListItems] = useState<IMainCarouselItemDto[]>([]);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const { getMainCarouselItems, mainCarouselItems } = usePagesStore((state) => state);

	useEffect(() => {
		getMainCarouselItems();
	}, [getMainCarouselItems]);
	useEffect(() => {
		if (mainCarouselItems) {
			setListItems(mainCarouselItems.map((item) => new MainCarouselDto(item)));
		}
	}, [mainCarouselItems]);

	return (
		<>
			<Header addButtonHandler={() => setIsModalOpen(true)} />
			<List items={listItems} listIsLoaded={true} />
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title='Create new main poster'>
				<CarouselForm />
			</Modal>
		</>
	);
};

export default MainCarouselList;
