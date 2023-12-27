import Header from "@components/Header";
import List from "@components/List";
import { IMainCarouselItemDto } from "@models/mainCarousel";
import { usePagesStore } from "@store/pagesStore/pagesStore";
import { useEffect, useState } from "react";
import { MainCarouselDto } from "../../../dtos/mainCatouselDto";

const MainCarouselList = () => {
	const [listItems, setListItems] = useState<IMainCarouselItemDto[]>([]);

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
			<Header />
			<List items={listItems} listIsLoaded={true} />
		</>
	);
};

export default MainCarouselList;
