import React from "react";
import { cn } from "@utils/cn";

import EditIcon from "@assets/edit.svg";
import DeleteIcon from "@assets/delete.svg";

interface ListItem {
	id: number;
	title: string;
	subtitle: string;
}

interface ListProps {
	items: ListItem[];
}

const List: React.FC<ListProps> = ({ items }) => {
	return (
		<div className={cn("w-full shadow-2xl rounded-lg border border-gray-300 mt-3 ")}>
			{items.map((item) => (
				<div key={item.id} className={cn("flex items-center justify-between border-b border-gray-300 py-2 px-4")}>
					<div className={cn("flex items-center justify-between w-full")}>
						<div className={cn("mr-4")}>
							<h3 className={cn("text-lg font-bold")}>{item.title}</h3>
							<p className={cn("text-gray-500")}>{item.subtitle}</p>
						</div>
						<div className={cn("flex")}>
							<button className={cn("mr-4")}>
								<EditIcon />
							</button>

							<button>
								<DeleteIcon />
							</button>
						</div>
					</div>
				</div>
			))}
			<div className={cn("flex justify-between p-4")}>
				<button className={cn("px-4 py-2 bg-blue-500 text-white rounded-lg")}>Previous</button>
				<div className='flex items-center bg-gray-200 px-3 py-2 rounded-lg'>Page 1 of 10</div>
				<button className={cn("px-4 py-2 bg-blue-500 text-white rounded-lg")}>Next</button>
			</div>
		</div>
	);
};

export default List;
