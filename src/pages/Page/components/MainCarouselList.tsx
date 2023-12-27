import Header from "@components/Header";
import List from "@components/List";
import { usePagesStore } from "@store/pagesStore/pagesStore";
import { useEffect } from "react";

const itemsArray = [
	{
		id: "1",
		title: "Item 1",
		subtitle: "Subtitle for Item 1",
	},
];

const MainCarouselList = () => {
	const { getMainCarouselItems, mainCarouselItems } = usePagesStore((state) => state);

	useEffect(() => {
		getMainCarouselItems();
	}, [getMainCarouselItems]);

	return (
		<>
			<Header />
			<List items={itemsArray} listIsLoaded={true} />
		</>
	);
};

export default MainCarouselList;
