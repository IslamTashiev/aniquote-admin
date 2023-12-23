import DeleteIcon from "@assets/close.svg";
import { IUser } from "@models/user";
import { FC } from "react";

interface AdminCardProps {
	admin: IUser;
}

const AdminCard: FC<AdminCardProps> = ({ admin }) => {
	return (
		<div className='max-w-44 h-56 flex flex-col justify-center items-center border border-gray-200 rounded-lg w-full relative'>
			<DeleteIcon />
			<img className='w-12 h-12 rounded-full object-cover mb-2' src={admin.avatar} alt='admin-avatar' />
			<p className='mb-2 font-medium'>{admin.fullName}</p>
			<span className='text-gray-500'>{admin.role}</span>
		</div>
	);
};

export default AdminCard;
