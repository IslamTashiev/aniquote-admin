import { cn } from "@utils/cn";
import React, { FC, useState, useEffect, useRef } from "react";

interface DropdownOption {
	label: string;
	value: string | number;
}

interface DropdownProps {
	options: DropdownOption[];
	selectedValue: string | number;
	onSelectChange: (value: string | number) => void;
}

const Dropdown: FC<DropdownProps> = ({ options, selectedValue, onSelectChange }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredOptions, setFilteredOptions] = useState(options);
	const inputRef = useRef<HTMLInputElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isOpen && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isOpen]);

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleClickOutside = (event: MouseEvent) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
			setIsOpen(false);
			setSearchTerm("");
		}
	};

	const handleSelectChange = (value: string | number) => {
		onSelectChange(value);
		setIsOpen(false);
		setSearchTerm("");
	};

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
		setSearchTerm("");
		setFilteredOptions(options);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSearchTerm(value);
		const filtered = options.filter((option) => option.label.toLowerCase().includes(value.toLowerCase()));
		setFilteredOptions(filtered);
	};

	return (
		<div className='relative w-full' ref={dropdownRef}>
			<div className={cn("w-full border border-gray-300 rounded-md px-3 py-2 cursor-pointer", { "border-blue-500 border-2": isOpen })} onClick={toggleDropdown}>
				{options.find((option) => option.value === selectedValue)?.label || "Select an option"}
			</div>
			{isOpen && (
				<div className='absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md max-h-80 overflow-auto'>
					<input
						ref={inputRef}
						type='text'
						value={searchTerm}
						onChange={handleInputChange}
						className='w-full border-b border-gray-300 focus:outline-blue-500 px-3 py-2 rounded-md'
						placeholder='Search...'
					/>
					{filteredOptions.map((option) => (
						<div key={option.value} className='px-3 py-2 cursor-pointer hover:bg-gray-100' onClick={() => handleSelectChange(option.value)}>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
