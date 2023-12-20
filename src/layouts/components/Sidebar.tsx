import React, { useState } from "react";
import { cn } from "../../utils/cn";
import { useNavigate } from "react-router";

const listItems = [
	{ title: "Pages", icon: <></>, path: "/pages" },
	{ title: "Quotes", icon: <></>, path: "/quotes" },
	{ title: "Statistic", icon: <></>, path: "/statistic" },
];

const Sidebar: React.FC = () => {
	const [activeElement, setActiveElement] = useState<number | null>(null);

	const navigate = useNavigate();

	const onListItemClick = (index: number) => {
		const clickedItem = listItems[index];
		navigate(clickedItem.path);
		setActiveElement(index);
	};

	return (
		<div className={cn("max-w-64 min-w-56 w-full bg-[#363740] h-screen flex flex-col justify-between")}>
			<div>
				<h1 className={cn("text-white font-bold text-4xl text-center py-7")}>ADMIN</h1>
				<ul>
					{listItems.map((item, index) => (
						<li
							onClick={() => onListItemClick(index)}
							key={index}
							className={cn("flex gap-3 items-center cursor-pointer text-[#A4A6B3] px-4 py-2 hover:bg-[#9fa2b44a] transition duration-200", { "bg-[#9fa2b44a]": activeElement === index })}
						>
							{item.icon}
							{item.title}
						</li>
					))}
				</ul>
			</div>
			<div className='p-3'>
				<button className='bg-[#9fa2b44a] w-full py-2 rounded text-white'>Logout</button>
			</div>
		</div>
	);
};

export default Sidebar;
