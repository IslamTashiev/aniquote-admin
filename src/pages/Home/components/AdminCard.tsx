import DeleteIcon from "@assets/close.svg";

const AdminCard = () => {
	return (
		<div className='max-w-44 h-56 flex flex-col justify-center items-center border border-gray-200 rounded-lg w-full relative'>
			<DeleteIcon />
			<img className='w-12 h-12 rounded-full object-cover mb-2' src='https://wallpapercave.com/wp/wp2373178.jpg' alt='admin-avatar' />
			<p className='mb-2 font-medium'>John Johnsnon</p>
			<span className='text-gray-500'>CEO</span>
		</div>
	);
};

export default AdminCard;
