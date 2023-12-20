import React from "react";
import { cn } from "../../../utils/cn";

const Header: React.FC = () => {
	return (
		<div className={cn("flex items-center justify-between w-full")}>
			<div className={cn("flex")}>
				<button className={cn("flex items-center bg-gray-200 px-3 py-2 rounded-lg mr-2")}>
					<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M5 10H15M2.5 5H17.5M7.5 15H12.5' stroke='#344054' strokeWidth='1.67' strokeLinecap='round' strokeLinejoin='round' />
					</svg>
					Filters
				</button>

				<button className={cn("flex items-center bg-blue-500 text-white px-3 py-2 rounded-lg")}>
					<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M9.99999 4.16667V15.8333M4.16666 10H15.8333' stroke='white' strokeWidth='1.67' strokeLinecap='round' strokeLinejoin='round' />
					</svg>
					Add new item
				</button>
			</div>

			<div className={cn("relative")}>
				<input type='text' className={cn("pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent")} placeholder='Search...' />
				<svg className={cn("absolute left-3 top-1/2 transform -translate-y-1/2")} width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z'
						stroke='#667085'
						strokeWidth='1.66667'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>
		</div>
	);
};

export default Header;
