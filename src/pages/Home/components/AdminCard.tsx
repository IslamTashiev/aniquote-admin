import React from "react";

const AdminCard = () => {
	return (
		<div className='max-w-44 h-56 flex flex-col justify-center items-center border border-gray-200 rounded-lg w-full relative'>
			<svg className='absolute right-3 top-3 cursor-pointer' width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M8.78198 0.408144L0.457465 8.77549C0.233197 9.00091 0.233197 9.3664 0.457465 9.59182C0.681733 9.81724 1.04534 9.81724 1.26961 9.59182L9.59412 1.22447C9.81839 0.999048 9.81839 0.633566 9.59412 0.408144C9.36986 0.182722 9.00624 0.182722 8.78198 0.408144Z'
					fill='#747474'
				/>
				<path
					d='M9.55029 8.77571L1.21937 0.414793C0.994934 0.189543 0.631043 0.189543 0.406602 0.414793C0.182161 0.640042 0.182161 1.00524 0.406602 1.23049L8.73752 9.59141C8.96196 9.81666 9.32585 9.81666 9.55029 9.59141C9.77473 9.36617 9.77473 9.00096 9.55029 8.77571Z'
					fill='#747474'
				/>
			</svg>

			<img className='w-12 h-12 rounded-full object-cover mb-2' src='https://wallpapercave.com/wp/wp2373178.jpg' alt='admin-avatar' />
			<p className='mb-2 font-medium'>John Johnsnon</p>
			<span className='text-gray-500'>CEO</span>
		</div>
	);
};

export default AdminCard;
