import AdminCard from "./components/AdminCard";

const Home = () => {
	return (
		<div className='px-12 mt-5'>
			<h2 className='text-2xl'>Workspace admins</h2>
			<div className='flex gap-2 mt-2 flex-wrap'>
				<AdminCard />
				<div className='max-w-44 h-56 flex flex-col justify-center items-center border border-blue-600 rounded-lg w-full cursor-pointer'>
					<svg width='33' height='32' viewBox='0 0 33 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M5.5 16H27.5' stroke='#0832DE' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
						<path d='M16.5 5V27' stroke='#0832DE' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
					</svg>
					<p className='text-blue-600'>Add admin</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
