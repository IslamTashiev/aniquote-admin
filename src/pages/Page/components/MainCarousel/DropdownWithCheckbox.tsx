import Dropdown from "@components/Dropdown";
import { IQuote } from "@models/quotes";
import { usePagesStore } from "@store/pagesStore/pagesStore";
import React, { FC, useEffect, useState } from "react";

interface IDropdownWithCheckboxProps {
	checkboxValues: string[];
	setCheckboxValues: React.Dispatch<React.SetStateAction<string[]>>;
	selectedValue: string | number;
	setSelectedValue: React.Dispatch<React.SetStateAction<string | number>>;
	maxSelectedCount: number;
}

const DropdownWithCheckbox: FC<IDropdownWithCheckboxProps> = ({ checkboxValues, setCheckboxValues, selectedValue, setSelectedValue, maxSelectedCount }) => {
	const [selectedCheckboxValues, setSelectedCheckboxValues] = useState<IQuote[]>([]);

	const { titles, getQuotesByTitle, quotesByTitle, getTitles } = usePagesStore((state) => state);

	const handleSelectValue = (value: string | number) => {
		const currentTitle = titles.find((title) => title.value === value)?.label;
		if (currentTitle) {
			getQuotesByTitle(currentTitle);
			setSelectedValue(value);
		}
	};
	const handleCheckboxChange = (id: string) => {
		setCheckboxValues((prevState) => {
			if (prevState.includes(id)) {
				return prevState.filter((value) => value !== id);
			} else {
				return maxSelectedCount === prevState.length ? prevState : [...prevState, id];
			}
		});
	};

	useEffect(() => {
		if (quotesByTitle.length) {
			setSelectedCheckboxValues(quotesByTitle.filter((quote) => checkboxValues.includes(quote._id)));
		}
	}, [checkboxValues, quotesByTitle]);
	useEffect(() => {
		getTitles();
	}, [getTitles]);
	useEffect(() => {
		if (selectedValue) {
			getQuotesByTitle(selectedValue.toString());
		}
	}, [selectedValue, getQuotesByTitle]);

	return (
		<>
			<div className='mb-4'>
				<span className='block mb-1 font-medium'>Chose title</span>
				<Dropdown onSelectChange={handleSelectValue} options={titles} selectedValue={selectedValue} />
			</div>
			{selectedCheckboxValues.length ? (
				<>
					<span className='block mb-1 font-medium'>Selected quotes</span>
					<div className='max-h-44 overflow-auto mb-4 border border-gray-300 rounded-lg px-3'>
						{selectedCheckboxValues.map((item) => (
							<div key={item._id} className='border-b border-gray-300 py-2'>
								<h3 className='font-bold'>
									{item.anime} • {item.character}
								</h3>
								<p>{item.quote}</p>
							</div>
						))}
					</div>
				</>
			) : null}

			{quotesByTitle.length ? (
				<>
					<span className='block mb-1 font-medium'>Chose quote</span>
					<div className='max-h-44 overflow-auto mb-4 border border-gray-300 rounded-lg'>
						{quotesByTitle.map((checkbox) => (
							<div key={checkbox._id} className='border-b border-gray-300 hover:bg-slate-200 px-3'>
								<label className='flex items-center space-x-2 py-1 cursor-pointer'>
									<input
										type='checkbox'
										checked={checkboxValues.includes(checkbox._id)}
										onChange={() => handleCheckboxChange(checkbox._id)}
										className='form-checkbox rounded border-gray-300 text-blue-500 focus:ring-blue-500'
									/>
									<span className='text-gray-700 relative w-full'>
										{checkbox.quote.substring(0, 150) + "..."}
										<span className='px-1 bg-slate-300 absolute right-0 rounded-md'>{checkbox.quote.length}</span>
									</span>
								</label>
							</div>
						))}
					</div>
				</>
			) : null}
		</>
	);
};

export default DropdownWithCheckbox;
