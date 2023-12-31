import Header from "@components/Header";
import List from "@components/List";
import { IMainCarouselItemDto, IMainPosterItemRequest } from "@models/mainCarousel";
import { usePagesStore } from "@store/pagesStore/pagesStore";
import { useEffect, useState } from "react";
import ConfirmModal from "@components/ConfirmModal";
import CarouselForm from "./CarouselForm";
import { PosterDto } from "../../../../dtos/posterDto";

const MainCarouselList = () => {
	const [listItems, setListItems] = useState<IMainCarouselItemDto[]>([]);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [deletedItemId, setDeletedItemId] = useState<string | null>(null);
	const [updatedItemId, setUpdatedItemId] = useState<string | null>(null);

	const [checkboxValues, setCheckboxValues] = useState<string[]>([]);
	const [selectedValue, setSelectedValue] = useState<string | number>("");
	const [formData, setFormData] = useState<IMainPosterItemRequest>({
		quote: [],
		posterBackground: "",
		titleLogo: "",
		tablePriority: 0,
	});

	const { isMainPostersLoaded, createNewPoster, getPosters, mainPosters, deletePoster, updatePoster } = usePagesStore((state) => state);

	const handleConfirmModal = () => {
		deletePoster(deletedItemId ?? "");
		setDeletedItemId(null);
	};
	const handleEdit = (id: string) => {
		setUpdatedItemId(id);
		setIsModalOpen(true);
		const currentPoster = mainPosters.find((item) => item._id === id);
		if (currentPoster) {
			setFormData({
				posterBackground: currentPoster.posterBackground ?? "",
				titleLogo: currentPoster.titleLogo ?? "",
				tablePriority: currentPoster.tablePriority ?? 0,
				quote: currentPoster.quote.map((item) => item._id),
			});
			setCheckboxValues(currentPoster.quote.map((item) => item._id));
			setSelectedValue(currentPoster.quote[0].anime ?? "");
		}
	};
	const handleCreateNewItem = (formData: IMainPosterItemRequest) => {
		if (updatedItemId) {
			updatePoster(updatedItemId, formData);
			setUpdatedItemId(null);
			setIsModalOpen(false);
			setCheckboxValues([]);
			setSelectedValue("");
			return;
		}
		createNewPoster(formData);
		setIsModalOpen(false);
		setCheckboxValues([]);
		setSelectedValue("");
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
				<CarouselForm
					checkboxValues={checkboxValues}
					formData={formData}
					selectedValue={selectedValue}
					setCheckboxValues={setCheckboxValues}
					setSelectedValue={setSelectedValue}
					handleSubmit={handleCreateNewItem}
				/>
			) : (
				<List onEdit={handleEdit} onDelete={setDeletedItemId} items={listItems} listIsLoaded={isMainPostersLoaded} />
			)}
			<ConfirmModal isOpen={!!deletedItemId} message='Are you sure want delete this item' onClose={() => setDeletedItemId(null)} onConfirm={handleConfirmModal} title='Delete carousel item' />
		</>
	);
};

export default MainCarouselList;
