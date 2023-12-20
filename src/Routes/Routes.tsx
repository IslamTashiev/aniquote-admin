import { Routes as ReoutesLib, Route } from "react-router-dom";
import CheckAdmin from "./CheckAdmin";
import Login from "../pages/Login";
import Layout from "../layouts";
import React from "react";

const Routes = () => {
	const renderPageWithLayout = (component: React.ReactNode) => {
		return (
			<Layout>
				<CheckAdmin page={component} />
			</Layout>
		);
	};

	return (
		<ReoutesLib>
			<Route path='/login' element={<Login />} />
			<Route path='/' element={renderPageWithLayout(<>Home page</>)} />
		</ReoutesLib>
	);
};

export default Routes;
