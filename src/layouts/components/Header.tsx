const Header = () => {
	return (
		<div className='flex items-center justify-between w-full px-12 py-4 border-b-2 border-[#D1D1D1]'>
			<h1 className='text-3xl font-bold '>Hello, John 👋</h1>
			<div className='flex items-center gap-5'>
				<div className='border-2 border-[#D1D1D1] rounded-full flex items-center pr-3'>
					<input className='py-2 px-3 rounded-full bg-transparent outline-none' type='text' placeholder='Search' />
					<svg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<circle cx='7' cy='6.5' r='5.75' stroke='#C5C7CD' stroke-width='1.5' />
						<path d='M11.5 11L15.5 15' stroke='#C5C7CD' stroke-width='1.5' stroke-linecap='round' />
					</svg>
				</div>
				<img className='w-10 h-10 rounded-full object-cover' src='https://wallpapercave.com/wp/wp2373178.jpg' alt='user-avatar' />
			</div>
		</div>
	);
};

export default Header;
