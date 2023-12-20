import React from "react";
import { cn } from "../utils/cn";

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
								<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path d='M10 16.6667H17.5' stroke='#9B9B9B' strokeOpacity='0.9' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
									<path
										d='M13.75 2.91666C14.0815 2.58514 14.5312 2.3989 15 2.3989C15.2321 2.3989 15.462 2.44462 15.6765 2.53346C15.891 2.6223 16.0858 2.75251 16.25 2.91666C16.4142 3.08081 16.5444 3.27569 16.6332 3.49017C16.722 3.70464 16.7678 3.93452 16.7678 4.16666C16.7678 4.39881 16.722 4.62868 16.6332 4.84316C16.5444 5.05763 16.4142 5.25251 16.25 5.41666L5.83333 15.8333L2.5 16.6667L3.33333 13.3333L13.75 2.91666Z'
										stroke='#9B9B9B'
										strokeOpacity='0.9'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</button>

							<button>
								<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path d='M2.5 5H4.16667H17.5' stroke='#9B9B9B' strokeOpacity='0.9' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
									<path
										d='M6.66666 5.00002V3.33335C6.66666 2.89133 6.84225 2.4674 7.15481 2.15484C7.46737 1.84228 7.8913 1.66669 8.33332 1.66669H11.6667C12.1087 1.66669 12.5326 1.84228 12.8452 2.15484C13.1577 2.4674 13.3333 2.89133 13.3333 3.33335V5.00002M15.8333 5.00002V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1578 14.6087 18.3334 14.1667 18.3334H5.83332C5.3913 18.3334 4.96737 18.1578 4.65481 17.8452C4.34225 17.5326 4.16666 17.1087 4.16666 16.6667V5.00002H15.8333Z'
										stroke='#9B9B9B'
										strokeOpacity='0.9'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path d='M8.33334 9.16669V14.1667' stroke='#9B9B9B' strokeOpacity='0.9' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
									<path d='M11.6667 9.16669V14.1667' stroke='#9B9B9B' strokeOpacity='0.9' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
								</svg>
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
