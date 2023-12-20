import Header from "./components/Header";
import List from "./components/List";
import Tabs from "./components/Tabs";

const itemsArray = [
	{
		id: 1,
		title: "Item 1",
		subtitle: "Subtitle for Item 1",
	},
];

const tabsData = [
	{
		title: "Main carousel",
		content: (
			<>
				<Header />
				<List items={itemsArray} />
			</>
		),
	},
	{
		title: "Main cards",
		content: (
			<>
				<Header />
				<List items={itemsArray} />
			</>
		),
	},
	{
		title: "Anime titles",
		content: (
			<>
				<Header />
				<List items={itemsArray} />
			</>
		),
	},
];
const Page = () => {
	return (
		<div className='px-11 mt-3'>
			<Tabs tabs={tabsData} />
		</div>
	);
};

export default Page;
