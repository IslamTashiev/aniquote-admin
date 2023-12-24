import { cn } from "@utils/cn";
import { FC } from "react";

interface PaginationProps {
	prevPage: () => void;
	nextPage: () => void;
	currentPage: number;
	totalPages: number;
	isLoading: boolean;
}

const Pagination: FC<PaginationProps> = ({ currentPage, nextPage, prevPage, totalPages, isLoading }) => {
	return (
		<div className={cn("flex justify-between p-4 bg-white mt-3 shadow-2xl rounded-lg border border-gray-300")}>
			<button onClick={prevPage} className={cn("px-4 py-2 bg-blue-500 text-white rounded-lg", { "pointer-events-none bg-blue-300": currentPage <= 1 || !isLoading })}>
				Previous
			</button>
			<div className='flex items-center bg-gray-200 px-3 py-2 rounded-lg'>
				Page {currentPage} of {totalPages}
			</div>
			<button onClick={nextPage} className={cn("px-4 py-2 bg-blue-500 text-white rounded-lg", { "pointer-events-none bg-blue-300": currentPage === totalPages || !isLoading })}>
				Next
			</button>
		</div>
	);
};

export default Pagination;
