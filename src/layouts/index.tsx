import Sidebar from "./components/Sidebar";
import { FC } from "react";

interface LayoutProps {
	children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className='flex gap-5 overflow-hidden'>
			<Sidebar />
			<main className='max-h-screen overflow-auto'>{children}</main>
		</div>
	);
};

export default Layout;
