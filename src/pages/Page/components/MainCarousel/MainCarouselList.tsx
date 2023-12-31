import Header from "@components/Header";
import List from "@components/List";
import { IMainCarouselItemDto, IMainPosterItemRequest } from "@models/mainCarousel";
import { usePagesStore } from "@store/pagesStore/pagesStore";
import { useEffect, useState } from "react";
import ConfirmModal from "@components/ConfirmModal";
import NewCarouselForm from "./NewCarouselForm";
import { PosterDto } from "../../../../dtos/posterDto";

const MainCarouselList = () => {
	const [listItems, setListItems] = useState<IMainCarouselItemDto[]>([]);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [deletedItemId, setDeletedItemId] = useState<string | null>(null);

	const [checkboxValues, setCheckboxValues] = useState<string[]>([]);
	const [selectedValue, setSelectedValue] = useState<string | number>("");
	const [formData, setFormData] = useState<IMainPosterItemRequest>({
		quote: [],
		posterBackground: "",
		titleLogo: "",
		tablePriority: 0,
	});

	const { removeCarouselItem, isMainPostersLoaded, createNewPoster, getPosters, mainPosters } = usePagesStore((state) => state);

	const handleConfirmModal = () => {
		removeCarouselItem(deletedItemId ?? "");
		setDeletedItemId(null);
	};
	const handleCreateNewItem = (formData: IMainPosterItemRequest) => {
		createNewPoster(formData);
		setIsModalOpen(false);
	};

	useEffect(() => {
		getPosters();
	}, [getPosters]);
	useEffect(() => {
		if (mainPosters) {
			setListItems(mainPosters.map((item) => new PosterDto(item)));
		}
	}, [mainPosters]);

	return (
		<>
			<Header addButtonHandler={() => setIsModalOpen(!isModalOpen)} />
			{isModalOpen ? (
				<NewCarouselForm
					checkboxValues={checkboxValues}
					formData={formData}
					selectedValue={selectedValue}
					setCheckboxValues={setCheckboxValues}
					setSelectedValue={setSelectedValue}
					handleSubmit={handleCreateNewItem}
				/>
			) : (
				<List onDelete={setDeletedItemId} items={listItems} listIsLoaded={isMainPostersLoaded} />
			)}
			<ConfirmModal isOpen={!!deletedItemId} message='Are you sure want delete this item' onClose={() => setDeletedItemId(null)} onConfirm={handleConfirmModal} title='Delete carousel item' />
		</>
	);
};

export default MainCarouselList;
