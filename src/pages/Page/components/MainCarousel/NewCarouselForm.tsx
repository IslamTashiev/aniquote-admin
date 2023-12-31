import React, { useEffect, useState } from "react";
import DropdownWithCheckbox from "./DropdownWithCheckbox";
import AddIcon from "@assets/add-admin.svg";

type IFile = {
	file: File | null;
	warning: string | null;
};

const NewCarouselForm = () => {
	const [checkboxValues, setCheckboxValues] = useState<string[]>([]);
	const [selectedValue, setSelectedValue] = useState<string | number>("");
	const [posterBackground, setPosterBackground] = useState<IFile>({ file: null, warning: null });
	const [tileLogo, setTileLogo] = useState<IFile>({ file: null, warning: null });

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		const inputName = event.target?.name;

		if (inputName === "posterBackground" && file) {
			if (file.size <= 2048 * 1024) {
				setPosterBackground({ file, warning: null });
			} else {
				setPosterBackground({ file: null, warning: "File size is too large" });
			}
		} else if (inputName === "tileLogo" && file) {
			if (file.size <= 2048 * 1024) {
				setTileLogo({ file, warning: null });
			} else {
				setTileLogo({ file: null, warning: "File size is too large" });
			}
		}
	};

	return (
		<div>
			<DropdownWithCheckbox checkboxValues={checkboxValues} setCheckboxValues={setCheckboxValues} selectedValue={selectedValue} setSelectedValue={setSelectedValue} maxSelectedCount={3} />
			<div className='flex gap-3'>
				<label>
					<input type='file' onChange={handleFileChange} name='posterBackground' className='hidden' />
					<span className='block mb-1 font-medium'>Select background image (.png, .jpg, .jpeg)</span>
					<div className='w-96 h-80 border border-gray-300 rounded-lg flex justify-center items-center cursor-pointer'>
						{posterBackground.file ? <img className='w-full h-full object-cover rounded-lg' src={URL.createObjectURL(posterBackground.file)} alt='selected-image' /> : <AddIcon />}
					</div>
					{posterBackground.warning && <p className='text-red-500'>{posterBackground.warning}</p>}
				</label>
				<label>
					<input type='file' onChange={handleFileChange} name='tileLogo' className='hidden' />
					<span className='block mb-1 font-medium'>Select logo (.png, .jpg, .jpeg)</span>
					<div className='w-80 h-80 border border-gray-300 rounded-lg flex justify-center items-center cursor-pointer'>
						{tileLogo.file ? <img className='w-44 object-cover rounded-lg' src={URL.createObjectURL(tileLogo.file)} alt='selected-image' /> : <AddIcon />}
					</div>
					{tileLogo.warning && <p className='text-red-500'>{tileLogo.warning}</p>}
				</label>
			</div>
		</div>
	);
};

export default NewCarouselForm;
