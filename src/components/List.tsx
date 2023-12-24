import React from "react";
import { cn } from "@utils/cn";
import { IQuoteDto } from "../dtos/quoteDto";
import Loader from "./Loader/Loader";

import EditIcon from "@assets/edit.svg";
import DeleteIcon from "@assets/delete.svg";

interface ListProps {
	items: IQuoteDto[];
	listIsLoaded: boolean;
}

const List: React.FC<ListProps> = ({ items, listIsLoaded }) => {
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
						<div className={cn("mr-4")}>
							<h3 className={cn("text-lg font-bold")}>{item.title}</h3>
							<p className={cn("text-gray-500")}>{item.subtitle.substring(0, 200) + "..."}</p>
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
		</div>
	);
};

export default List;
