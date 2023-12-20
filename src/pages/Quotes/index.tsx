import React from "react";
import Header from "../../components/Header";
import List from "../../components/List";

const itemsArray = [
	{
		id: 1,
		title: "Item 1",
		subtitle: "Subtitle for Item 1",
	},
	{
		id: 2,
		title: "Item 1",
		subtitle: "Subtitle for Item 1",
	},
	{
		id: 3,
		title: "Item 1",
		subtitle: "Subtitle for Item 1",
	},
	{
		id: 4,
		title: "Item 1",
		subtitle: "Subtitle for Item 1",
	},
	{
		id: 5,
		title: "Item 1",
		subtitle: "Subtitle for Item 1",
	},
];

const Quotes = () => {
	return (
		<div className='mt-3 px-11'>
			<div className='flex gap-3 items-center mb-3'>
				<h2 className='text-2xl font-medium'>All quotes</h2>
				<p>
					Total: <span className='text-blue-500 font-medium'>5506</span> quotes
				</p>
			</div>
			<Header />
			<List items={itemsArray} />
		</div>
	);
};

export default Quotes;
