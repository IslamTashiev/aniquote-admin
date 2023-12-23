import { useAppStore } from "@store/appStore";
import AdminCard from "./components/AdminCard";
import AddIcon from "@assets/add-admin.svg";
import AdminsList from "./components/AdminsList";
import { useEffect } from "react";

const Home = () => {
	const { adminsList, getAdminsList } = useAppStore((state) => state);

	useEffect(() => {
		getAdminsList();
	}, [getAdminsList]);

	return (
		<div className='px-12 mt-5'>
			<h2 className='text-2xl'>Workspace admins</h2>
			<div className='flex gap-2 mt-2 flex-wrap'>
				<AdminsList adminsList={adminsList} />
				<div className='max-w-44 h-56 flex flex-col justify-center items-center border border-blue-600 rounded-lg w-full cursor-pointer'>
					<AddIcon />
					<p className='text-blue-600'>Add admin</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
