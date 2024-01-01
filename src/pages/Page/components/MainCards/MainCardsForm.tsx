import React, { FC, useState } from "react";
import DropdownWithCheckbox from "../MainCarousel/DropdownWithCheckbox";
import { IFile } from "../MainCarousel/CarouselForm";
import AddIcon from "@assets/add-admin.svg";
import { ICardRequest } from "@models/cards";
import { uploadFiles } from "@utils/uploadAndGetFile";
import { usePagesStore } from "@store/pagesStore/pagesStore";

interface MainCardsFormProps {
	checkboxValues: string[];
	setCheckboxValues: React.Dispatch<React.SetStateAction<string[]>>;
	selectedValue: string | number;
	setSelectedValue: React.Dispatch<React.SetStateAction<string | number>>;
	formData: ICardRequest;
	handleSubmit: (formData: ICardRequest) => void;
}

const MainCardsForm: FC<MainCardsFormProps> = (props) => {
	const { checkboxValues, formData, selectedValue, setCheckboxValues, setSelectedValue, handleSubmit } = props;
	const { titles } = usePagesStore((state) => state);

	const [animeBckg, setAnimeBckg] = useState<IFile>({ file: null, warning: null });

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (file) {
			if (file.size <= 2000 * 1024) {
				setAnimeBckg({ file, warning: null });
			} else {
				setAnimeBckg({ file: null, warning: "File size is too large" });
			}
		}
	};
	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const animeBckgUrl = animeBckg.file ? await uploadFiles(animeBckg) : formData.anime_bckg;

		handleSubmit({
			quotes: checkboxValues,
			anime_bckg: animeBckgUrl || "",
			anime: titles.find((item) => item.value === selectedValue.toString())?.label || "",
		});
	};

	return (
		<form onSubmit={onSubmit}>
			<DropdownWithCheckbox checkboxValues={checkboxValues} setCheckboxValues={setCheckboxValues} selectedValue={selectedValue} setSelectedValue={setSelectedValue} maxSelectedCount={3} />
			<div>
				<label>
					<input type='file' onChange={handleFileChange} name='titleLogo' className='hidden' />
					<span className='block mb-1 font-medium'>Select logo (.png, .jpg, .jpeg)</span>
					<div className='w-80 h-96 border border-gray-300 rounded-lg flex justify-center items-center cursor-pointer'>
						{animeBckg.file || formData.anime_bckg ? (
							<img className='w-full h-full object-cover rounded-lg' src={animeBckg.file ? URL.createObjectURL(animeBckg.file) : formData.anime_bckg} alt='selected-image' />
						) : (
							<AddIcon />
						)}
					</div>
					{animeBckg.warning && <p className='text-red-500'>{animeBckg.warning}</p>}
				</label>
			</div>
			<button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-3'>Submit</button>
		</form>
	);
};

export default MainCardsForm;
