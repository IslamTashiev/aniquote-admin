import React, { useState, useEffect } from "react";
import { useAppStore } from "@store/appStore";
import Modal from "@components/Modal";
import AddIcon from "@assets/add-admin.svg";
import AdminsList from "./components/AdminsList";
import AdminForm from "./components/AdminForm";
import { FormData } from "@models/newAdmin";
import Loader from "@components/Loader/Loader";

const Home = () => {
	const { adminsList, getAdminsList, createNewAdmin, isAdminsLoaded } = useAppStore((state) => state);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSubmit = (formData: FormData) => {
		createNewAdmin(formData);
		setIsModalOpen(false);
	};

	useEffect(() => {
		getAdminsList();
	}, [getAdminsList]);

	if (!isAdminsLoaded) return <Loader />;

	return (
		<div className='px-12 mt-5'>
			<h2 className='text-2xl'>Workspace admins</h2>
			<div className='flex gap-2 mt-2 flex-wrap'>
				<AdminsList adminsList={adminsList} />
				<div className='max-w-44 h-56 flex flex-col justify-center items-center border border-blue-600 rounded-lg w-full cursor-pointer' onClick={() => setIsModalOpen(true)}>
					<AddIcon />
					<p className='text-blue-600'>Add admin</p>
				</div>
			</div>
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title='Create a new admin'>
				<AdminForm onSubmit={handleSubmit} />
			</Modal>
		</div>
	);
};

export default Home;
