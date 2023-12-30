import React from "react";
import { cn } from "@utils/cn";
import Loader from "./Loader/Loader";

import EditIcon from "@assets/edit.svg";
import DeleteIcon from "@assets/delete.svg";

export interface IListItem {
	id: string;
	title: string;
	subtitle: string;
}

interface ListProps {
	items: IListItem[];
	listIsLoaded: boolean;
	withBudge?: boolean;
	onDelete?: (id: string) => void;
	onEdit?: (id: string) => void;
}

const List: React.FC<ListProps> = ({ items, listIsLoaded, onDelete, onEdit, withBudge }) => {
	if (!listIsLoaded) {
		return (
			<div className='bg-white mt-3 shadow-2xl rounded-lg border border-gray-300 h-96'>
				<Loader />
			</div>
		);
	}

	return (
		<div className={cn("w-full shadow-2xl rounded-lg border border-gray-300 mt-3 ")}>
			{items.map((item) => (
				<div key={item.id} className={cn("flex items-center justify-between border-b border-gray-300 py-2 px-4")}>
					<div className={cn("flex items-center justify-between w-full")}>
						<div className={cn("mr-4 w-full")}>
							<h3 className={cn("text-lg font-bold")}>{item.title}</h3>
							<p className={cn("text-gray-500 relative w-full")}>
								{item.subtitle.split("||lengthOfQuotes=")[0].substring(0, 200) + "..."}
								{withBudge && <span className='px-1 bg-slate-300 absolute right-0 rounded-md'>and {item.subtitle.split("||lengthOfQuotes=")[1]} more</span>}
							</p>
						</div>
						<div className={cn("flex")}>
							<button onClick={onEdit ? () => onEdit(item.id) : () => {}} className={cn("mr-4")}>
								<EditIcon />
							</button>

							<button onClick={onDelete ? () => onDelete(item.id) : () => {}}>
								<DeleteIcon />
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default List;
