import { IQuoteForm } from "@models/quotes";
import React, { FC, useState } from "react";

interface CreateQuoteFormProps {
	onSubmit: (formData: IQuoteForm) => void;
}

const CreateQuoteForm: FC<CreateQuoteFormProps> = ({ onSubmit }) => {
	const [formData, setFormData] = useState<IQuoteForm>({
		quote: "",
		character: "",
		anime: "",
		animePhotoURL: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(formData);
		setFormData({
			quote: "",
			character: "",
			anime: "",
			animePhotoURL: "",
		});
	};

	return (
		<form onSubmit={handleSubmit} className='mx-auto bg-white'>
			<div className='mb-4'>
				<label htmlFor='quote' className='block mb-1 font-medium'>
					Quote:
				</label>
				<textarea id='quote' name='quote' value={formData.quote} onChange={handleChange} className='w-full border border-gray-300 focus:outline-blue-500 rounded-md px-3 py-2 resize-none' />
			</div>
			<div className='mb-4'>
				<label htmlFor='character' className='block mb-1 font-medium'>
					Character:
				</label>
				<input type='text' id='character' name='character' value={formData.character} onChange={handleChange} className='w-full border border-gray-300 focus:outline-blue-500 rounded-md px-3 py-2' />
			</div>
			<div className='mb-4'>
				<label htmlFor='anime' className='block mb-1 font-medium'>
					Anime:
				</label>
				<input type='text' id='anime' name='anime' value={formData.anime} onChange={handleChange} className='w-full border border-gray-300 focus:outline-blue-500 rounded-md px-3 py-2' />
			</div>
			<div className='mb-6'>
				<label htmlFor='animePhotoURL' className='block mb-1 font-medium'>
					Anime Photo URL: (optional)
				</label>
				<input
					type='text'
					id='animePhotoURL'
					name='animePhotoURL'
					value={formData.animePhotoURL}
					onChange={handleChange}
					className='w-full border border-gray-300 focus:outline-blue-500 rounded-md px-3 py-2'
				/>
			</div>
			<button type='submit' className='w-full bg-blue-500 text-white font-semibold rounded-md py-2'>
				Create Quote
			</button>
		</form>
	);
};

export default CreateQuoteForm;
