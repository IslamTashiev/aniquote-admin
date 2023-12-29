import Header from "@components/Header";
import List from "@components/List";
import { IMainCarouselItemDto } from "@models/mainCarousel";
import { usePagesStore } from "@store/pagesStore/pagesStore";
import { useEffect, useState } from "react";
import { MainCarouselDto } from "../../../../dtos/mainCatouselDto";
import Modal from "@components/Modal";
import CarouselForm from "./CarouselForm";
import ConfirmModal from "@components/ConfirmModal";

const MainCarouselList = () => {
	const [listItems, setListItems] = useState<IMainCarouselItemDto[]>([]);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [deletedItemId, setDeletedItemId] = useState<string | null>(null);

	const { getMainCarouselItems, mainCarouselItems, removeCarouselItem, isMainCarouselLoaded } = usePagesStore((state) => state);

	const handleConfirmModal = () => {
		removeCarouselItem(deletedItemId ?? "");
		setDeletedItemId(null);
	};
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
			<List onDelete={setDeletedItemId} items={listItems} listIsLoaded={isMainCarouselLoaded} />
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title='Create new main poster'>
				<CarouselForm />
			</Modal>
			<ConfirmModal isOpen={!!deletedItemId} message='Are you sure want delete this item' onClose={() => setDeletedItemId(null)} onConfirm={handleConfirmModal} title='Delete carousel item' />
		</>
	);
};

export default MainCarouselList;
