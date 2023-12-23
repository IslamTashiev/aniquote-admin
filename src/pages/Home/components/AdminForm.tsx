import { FormData } from "@models/newAdmin";
import React, { FC, useState } from "react";

interface AdminFormProps {
	onSubmit: (formData: FormData) => void;
}

const AdminForm: FC<AdminFormProps> = ({ onSubmit }) => {
	const [formData, setFormData] = useState<FormData>({
		fullName: "",
		email: "",
		password: "",
		role: "ADMIN",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
			fullName: "",
			email: "",
			password: "",
			role: "",
		});
	};

	return (
		<form onSubmit={handleSubmit} className='mx-auto bg-white'>
			<div className='mb-4'>
				<label htmlFor='fullName' className='block mb-1 font-medium'>
					Full Name:
				</label>
				<input type='text' id='fullName' name='fullName' value={formData.fullName} onChange={handleChange} className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-blue-500' />
			</div>
			<div className='mb-4'>
				<label htmlFor='email' className='block mb-1 font-medium'>
					Email:
				</label>
				<input type='email' id='email' name='email' value={formData.email} onChange={handleChange} className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-blue-500' />
			</div>
			<div className='mb-4'>
				<label htmlFor='password' className='block mb-1 font-medium'>
					Password:
				</label>
				<input type='password' id='password' name='password' value={formData.password} onChange={handleChange} className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-blue-500' />
			</div>
			<div className='mb-6'>
				<label htmlFor='role' className='block mb-1 font-medium'>
					Role:
				</label>
				<select id='role' name='role' value={formData.role} onChange={handleChange} className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-blue-500'>
					<option value='ADMIN'>Admin</option>
					<option value='CEO'>CEO</option>
					<option value='MANAGER'>Manager</option>
				</select>
			</div>
			<button type='submit' className='w-full bg-blue-500 text-white font-semibold rounded-md py-2'>
				Create Admin
			</button>
		</form>
	);
};

export default AdminForm;
