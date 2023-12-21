import React from "react";
import { cn } from "@utils/cn";

import FiltersIcon from "@assets/filters.svg";
import AddIcon from "@assets/add-item.svg";
import SearchIcon from "@assets/search.svg";

const Header: React.FC = () => {
	return (
		<div className={cn("flex items-center justify-between w-full")}>
			<div className={cn("flex")}>
				<button className={cn("flex items-center bg-gray-200 px-3 py-2 rounded-lg mr-2")}>
					<FiltersIcon />
					Filters
				</button>

				<button className={cn("flex items-center bg-blue-500 text-white px-3 py-2 rounded-lg")}>
					<AddIcon />
					Add new item
				</button>
			</div>

			<div className={cn("pl-2 border border-gray-300 rounded-lg flex items-center")}>
				<SearchIcon />
				<input type='text' className={cn("pl-2 pr-3 py-2 focus:outline-none rounded-lg")} placeholder='Search...' />
			</div>
		</div>
	);
};

export default Header;
