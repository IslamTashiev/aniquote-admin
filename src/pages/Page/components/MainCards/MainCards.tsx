import Header from "@components/Header";
import List, { IListItem } from "@components/List";
import { usePagesStore } from "@store/pagesStore/pagesStore";
import { useEffect, useState } from "react";
import { CardDto } from "../../../../dtos/cardDto";

const MainCards = () => {
	const [cardsList, setCardsList] = useState<IListItem[]>([]);

	const { getCards, cards } = usePagesStore((state) => state);

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
			<Header />
			<List items={cardsList} listIsLoaded withBudge={true} />
		</>
	);
};

export default MainCards;
