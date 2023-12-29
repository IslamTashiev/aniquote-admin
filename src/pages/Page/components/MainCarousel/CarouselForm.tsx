import Dropdown from "@components/Dropdown";
import { IMainCarouselItemData } from "@models/mainCarousel";
import { usePagesStore } from "@store/pagesStore/pagesStore";
import { useEffect, useState } from "react";

const CarouselForm = () => {
	const [selectedValue, setSelectedValue] = useState<string | number>("");
	const [checkboxValue, setcheckboxValue] = useState<string>("");
	const [formData, setFormData] = useState({
		anime_logo: "",
		anime_bckg: "",
	});

	const { titles, getTitles, getQuotesByTitle, quotesByTitle, createNewCarouselItem } = usePagesStore((state) => state);

	const handleSelectValue = (value: string | number) => {
		const currentTitle = titles.find((title) => title.value === value)?.label;
		if (currentTitle) {
			getQuotesByTitle(currentTitle);
			setSelectedValue(value);
		}
	};
	const handleCheckboxChange = (id: string) => {
		setcheckboxValue(id);
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const currentQuote = quotesByTitle.find((quote) => quote._id === checkboxValue);
		if (currentQuote) {
			const submitedData: IMainCarouselItemData = {
				anime_logo: formData.anime_logo,
				anime_bckg: formData.anime_bckg,
				quote: currentQuote.quote,
				character: currentQuote.character,
				anime: currentQuote.anime,
			};
			createNewCarouselItem(submitedData);
		}
	};
	useEffect(() => {
		getTitles();
	}, [getTitles]);

	return (
		<form onSubmit={handleSubmit}>
			<div className='mb-4'>
				<span className='block mb-1 font-medium'>Chose title</span>
				<Dropdown onSelectChange={handleSelectValue} options={titles} selectedValue={selectedValue} />
			</div>
			{quotesByTitle.length ? (
				<div className='max-h-44 overflow-auto mb-4'>
					<span className='block mb-1 font-medium'>Chose quote</span>
					{quotesByTitle.map((checkbox) => (
						<div key={checkbox._id} className='border-b border-gray-300 py-1'>
							<label className='flex items-center space-x-2'>
								<input
									type='checkbox'
									checked={checkboxValue === checkbox._id}
									onChange={() => handleCheckboxChange(checkbox._id)}
									className='form-checkbox rounded border-gray-300 text-blue-500 focus:ring-blue-500'
								/>
								<span className='text-gray-700 relative w-full'>
									{checkbox.quote.substring(0, 50) + "..."}
									<span className='px-1 bg-slate-300 absolute right-0 rounded-md'>{checkbox.quote.length}</span>
								</span>
							</label>
						</div>
					))}
				</div>
			) : null}
			<div className='mb-4'>
				<label htmlFor='Anime logo' className='block mb-1 font-medium'>
					Anime logo:
				</label>
				<input
					type='text'
					id='anime_logo'
					name='anime_logo'
					value={formData.anime_logo}
					onChange={handleChange}
					className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-blue-500'
				/>
			</div>
			<div className='mb-4'>
				<label htmlFor='Anime logo' className='block mb-1 font-medium'>
					Background poster:
				</label>
				<input
					type='text'
					id='anime_bckg'
					name='anime_bckg'
					value={formData.anime_bckg}
					onChange={handleChange}
					className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-blue-500'
				/>
			</div>
			<button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md w-full'>
				Create
			</button>
		</form>
	);
};

export default CarouselForm;
