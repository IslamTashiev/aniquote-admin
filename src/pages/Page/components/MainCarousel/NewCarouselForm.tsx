import React, { useEffect, useState } from "react";
import DropdownWithCheckbox from "./DropdownWithCheckbox";
import AddIcon from "@assets/add-admin.svg";
import { IMainPosterItemRequest } from "@models/mainCarousel";
import { uploadFiles } from "@utils/uploadAndGetFile";

export type IFile = {
	file: File | null;
	warning: string | null;
};

const NewCarouselForm = () => {
	const [checkboxValues, setCheckboxValues] = useState<string[]>([]);
	const [selectedValue, setSelectedValue] = useState<string | number>("");
	const [posterBackground, setPosterBackground] = useState<IFile>({ file: null, warning: null });
	const [titleLogo, setTitleLogo] = useState<IFile>({ file: null, warning: null });
	const [formData, setFormData] = useState<IMainPosterItemRequest>({
		quote: [],
		posterBackground: "",
		titleLogo: "",
		tablePriority: 0,
	});

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		const inputName = event.target?.name;

		if (inputName === "posterBackground" && file) {
			if (file.size <= 2048 * 1024) {
				setPosterBackground({ file, warning: null });
			} else {
				setPosterBackground({ file: null, warning: "File size is too large" });
			}
		} else if (inputName === "titleLogo" && file) {
			if (file.size <= 2048 * 1024) {
				setTitleLogo({ file, warning: null });
			} else {
				setTitleLogo({ file: null, warning: "File size is too large" });
			}
		}
	};
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const posterBackgroundUrl = await uploadFiles(posterBackground);
		const titleLogodUrl = await uploadFiles(titleLogo);
		setFormData({
			...formData,
			quote: checkboxValues,
			tablePriority: 1,
			posterBackground: posterBackgroundUrl || "",
			titleLogo: titleLogodUrl || "",
		});
	};

	return (
		<form onSubmit={handleSubmit}>
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
					<input type='file' onChange={handleFileChange} name='titleLogo' className='hidden' />
					<span className='block mb-1 font-medium'>Select logo (.png, .jpg, .jpeg)</span>
					<div className='w-80 h-80 border border-gray-300 rounded-lg flex justify-center items-center cursor-pointer'>
						{titleLogo.file ? <img className='w-44 object-cover rounded-lg' src={URL.createObjectURL(titleLogo.file)} alt='selected-image' /> : <AddIcon />}
					</div>
					{titleLogo.warning && <p className='text-red-500'>{titleLogo.warning}</p>}
				</label>
			</div>
			<button className='mt-3 bg-gray-200 text-black px-4 py-2 rounded-md mr-2'>Cancel</button>
			<button type='submit' className='mt-3 bg-blue-500 text-white px-4 py-2 rounded-md'>
				Create
			</button>
		</form>
	);
};

export default NewCarouselForm;
