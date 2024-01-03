import React, { useState } from "react";
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
	showListPriority?: boolean;
	onDelete?: (id: string) => void;
	onEdit?: (id: string) => void;
}

const List: React.FC<ListProps> = ({ items, listIsLoaded, ...props }) => {
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
				<ListItem {...props} item={item} />
			))}
		</div>
	);
};

interface ListItemProps {
	item: IListItem;
	withBudge?: boolean;
	showListPriority?: boolean;
	onDelete?: (id: string) => void;
	onEdit?: (id: string) => void;
}

const ListItem = (props: ListItemProps) => {
	const { item, showListPriority, onDelete, onEdit, withBudge } = props;
	const [tablePriority, setTablePriority] = useState<string>(item.id.split("/||")[1]);

	return (
		<div key={item.id} className={cn("flex items-center justify-between border-b border-gray-300 py-2 px-4")}>
			{showListPriority && (
				<input type='text' value={tablePriority} onChange={(e) => setTablePriority(e.target.value)} className='w-10 h-10 rounded-lg border border-gray-300 text-center focus:outline-blue-500 mr-3' />
			)}
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
	);
};

export default List;
