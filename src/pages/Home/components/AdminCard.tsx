import DeleteIcon from "@assets/close.svg";
import { IUser } from "@models/user";
import { useAppStore } from "@store/appStore";
import { useUserStore } from "@store/userStore/userStore";
import React, { FC } from "react";

interface AdminCardProps {
	admin: IUser;
}

const AdminCard: FC<AdminCardProps> = ({ admin }) => {
	const { user } = useUserStore((state) => state);
	const { removeAdmin } = useAppStore((state) => state);
	const isCurrentAdmin = user?._id !== admin._id;

	const handleDeleteAdmin = () => {
		const isConfirm = confirm(`Are you sure you want to delete ${admin.fullName}?`);
		if (isConfirm) removeAdmin(admin._id);
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
		</div>
	);
};

export default AdminCard;
