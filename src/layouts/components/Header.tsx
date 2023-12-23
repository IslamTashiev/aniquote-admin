import SearchIcon from "@assets/search.svg";
import { useUserStore } from "../../store/userStore/userStore";

const Header = () => {
	const { user } = useUserStore((state) => state);
	return (
		<div className='flex items-center justify-between w-full px-12 py-4 border-b-2 border-[#D1D1D1]'>
			<h1 className='text-3xl font-bold '>Hello, {user?.fullName} 👋</h1>
			<div className='flex items-center gap-5'>
				<div className='border-2 border-[#D1D1D1] rounded-full flex items-center pr-3'>
					<input className='py-2 px-3 rounded-full bg-transparent outline-none' type='text' placeholder='Search' />
					<SearchIcon />
				</div>
				<img className='w-10 h-10 rounded-full object-cover' src={user?.avatar} alt='user-avatar' />
			</div>
		</div>
	);
};

export default Header;
