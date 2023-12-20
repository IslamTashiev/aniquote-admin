import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { FC } from "react";

interface LayoutProps {
	children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className='flex overflow-hidden'>
			<Sidebar />
			<main className='max-h-screen overflow-auto w-full'>
				<Header />
				{children}
			</main>
		</div>
	);
};

export default Layout;
