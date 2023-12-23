import React, { FC, useState } from "react";
import DeleteIcon from "@assets/close.svg";
import { IUser } from "@models/user";
import { useAppStore } from "@store/appStore";
import { useUserStore } from "@store/userStore/userStore";
import ConfirmModal from "./ConfirmModal"; // Путь к вашему компоненту ConfirmModal

interface AdminCardProps {
	admin: IUser;
}

const AdminCard: FC<AdminCardProps> = ({ admin }) => {
	const { user } = useUserStore((state) => state);
	const { removeAdmin } = useAppStore((state) => state);
	const isCurrentAdmin = user?._id !== admin._id;

	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const handleDeleteAdmin = () => {
		setIsDeleteModalOpen(true);
	};
	const confirmDelete = () => {
		removeAdmin(admin._id);
		setIsDeleteModalOpen(false);
	};
	const closeModal = () => {
		setIsDeleteModalOpen(false);
	};

	return (
		<div className='max-w-44 h-56 flex flex-col justify-center items-center border border-gray-200 rounded-lg w-full relative'>
			{isCurrentAdmin && (
				<span onClick={handleDeleteAdmin} className='absolute right-3 top-3 cursor-pointer'>
					<DeleteIcon />
				</span>
			)}
			<img className='w-12 h-12 rounded-full object-cover mb-2' src={admin.avatar} alt='admin-avatar' />
			<p className='mb-2 font-medium'>
				{admin.fullName} {!isCurrentAdmin && <span className='text-blue-600'>(You)</span>}
			</p>
			<span className='text-gray-500'>{admin.role}</span>

			<ConfirmModal isOpen={isDeleteModalOpen} onClose={closeModal} onConfirm={confirmDelete} title={`Delete ${admin.fullName}?`} message={`Are you sure you want to delete ${admin.fullName}?`} />
		</div>
	);
};

export default AdminCard;
