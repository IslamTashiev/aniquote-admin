import React, { FC, useState } from "react";
import DropdownWithCheckbox from "./DropdownWithCheckbox";
import { IMainPosterItemRequest } from "@models/mainCarousel";
import { IImage } from "@models/image";
import ImageSelect from "@components/ImageSelect";

interface CarouselFormProps {
	checkboxValues: string[];
	setCheckboxValues: React.Dispatch<React.SetStateAction<string[]>>;
	selectedValue: string | number;
	setSelectedValue: React.Dispatch<React.SetStateAction<string | number>>;
	formData: IMainPosterItemRequest;
	handleSubmit: (formData: IMainPosterItemRequest) => void;
}

const CarouselForm: FC<CarouselFormProps> = (props) => {
	const { checkboxValues, formData, selectedValue, setCheckboxValues, setSelectedValue, handleSubmit } = props;
	const [poster, setPoseter] = useState<IImage | null>(null);
	const [logo, setLogo] = useState<IImage | null>(null);

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		handleSubmit({
			quote: checkboxValues,
			tablePriority: 1,
			posterBackground: poster?.image || "",
			titleLogo: logo?.image || "",
		});
	};

	return (
		<form onSubmit={onSubmit}>
			<DropdownWithCheckbox checkboxValues={checkboxValues} setCheckboxValues={setCheckboxValues} selectedValue={selectedValue} setSelectedValue={setSelectedValue} maxSelectedCount={1} />
			<span className='block mb-1 font-medium'>Select background image (.png, .jpg, .jpeg)</span>
			<ImageSelect selectImage={setPoseter} />
			<span className='block mb-1 font-medium'>Select logo (.png, .jpg, .jpeg)</span>
			<ImageSelect selectImage={setLogo} />
			<button className='mt-3 bg-gray-200 text-black px-4 py-2 rounded-md mr-2'>Cancel</button>
			<button type='submit' className='mt-3 bg-blue-500 text-white px-4 py-2 rounded-md'>
				Create
			</button>
		</form>
	);
};

export default CarouselForm;
