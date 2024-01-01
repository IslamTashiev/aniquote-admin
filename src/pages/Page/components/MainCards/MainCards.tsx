import Header from "@components/Header";
import List, { IListItem } from "@components/List";
import { usePagesStore } from "@store/pagesStore/pagesStore";
import { useEffect, useState } from "react";
import { CardDto } from "../../../../dtos/cardDto";
import MainCardsForm from "./MainCardsForm";
import { ICardRequest } from "@models/cards";
import ConfirmModal from "@components/ConfirmModal";

const MainCards = () => {
	const [cardsList, setCardsList] = useState<IListItem[]>([]);
	const [isAddFormActive, setIsAddFormActive] = useState<boolean>(false);
	const [deletedItemId, setDeletedItemId] = useState<string | null>(null);
	const [updatedItemId, setUpdatedItemId] = useState<string | null>(null);

	const [checkboxValues, setCheckboxValues] = useState<string[]>([]);
	const [selectedValue, setSelectedValue] = useState<string | number>("");
	const [formData, setFormData] = useState<ICardRequest>({
		quotes: [],
		anime_bckg: "",
		anime: "",
	});

	const { getCards, cards, createNewCard, updateCard, deleteCard } = usePagesStore((state) => state);

	const handleConfirmModal = () => {
		deleteCard(deletedItemId ?? "");
		setDeletedItemId(null);
	};
	const handleEdit = (id: string) => {
		setUpdatedItemId(id);
		setIsAddFormActive(true);
		const currentCard = cards.find((item) => item._id === id);
		if (currentCard) {
			setFormData({
				anime: currentCard.anime,
				anime_bckg: currentCard.anime_bckg,
				quotes: currentCard.quotes.map((item) => item._id),
			});
			setCheckboxValues(currentCard.quotes.map((item) => item._id));
			setSelectedValue(currentCard.quotes[0].anime ?? "");
		}
	};
	const handleSubmit = (formData: ICardRequest) => {
		if (updatedItemId) {
			updateCard(updatedItemId, formData);
			setUpdatedItemId(null);
			setIsAddFormActive(false);
			setCheckboxValues([]);
			setSelectedValue("");
			setFormData({
				anime: "",
				anime_bckg: "",
				quotes: [],
			});
		}

		createNewCard(formData);
		setIsAddFormActive(false);
		setCheckboxValues([]);
		setSelectedValue("");
		setFormData({
			anime: "",
			anime_bckg: "",
			quotes: [],
		});
	};

	useEffect(() => {
		getCards();
	}, [getCards]);
	useEffect(() => {
		if (cards) {
			setCardsList(cards.map((card) => new CardDto(card)));
		}
	}, [cards]);

	return (
		<>
			<Header addButtonHandler={() => setIsAddFormActive(!isAddFormActive)} />
			{isAddFormActive ? (
				<MainCardsForm
					checkboxValues={checkboxValues}
					formData={formData}
					selectedValue={selectedValue}
					setCheckboxValues={setCheckboxValues}
					setSelectedValue={setSelectedValue}
					handleSubmit={handleSubmit}
				/>
			) : (
				<List onDelete={setDeletedItemId} onEdit={handleEdit} items={cardsList} listIsLoaded withBudge={true} />
			)}
			<ConfirmModal isOpen={!!deletedItemId} message='You sure want delete this card?' onClose={() => setDeletedItemId(null)} onConfirm={handleConfirmModal} title='Delete this card?' />
		</>
	);
};

export default MainCards;
