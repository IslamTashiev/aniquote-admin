import { Routes as ReoutesLib, Route } from "react-router-dom";
import { useUserStore } from "../store/userStore/userStore";
import CheckAdmin from "./CheckAdmin";
import Login from "../pages/Login";
import Layout from "../layouts";
import React from "react";
import Home from "../pages/Home";
import Page from "../pages/Page";
import Quotes from "../pages/Quotes";
import Images from "../pages/Images";

const Routes = () => {
	const { isAuthenticated, user } = useUserStore((state) => state);
	const isAdmin: boolean = user?.role === "ADMIN";

	const renderPageWithLayout = (component: React.ReactNode) => {
		return (
			<Layout>
				<CheckAdmin page={component} isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
			</Layout>
		);
	};

	return (
		<ReoutesLib>
			<Route path='/login' element={<Login />} />
			<Route path='/' element={renderPageWithLayout(<Home />)} />
			<Route path='/pages' element={renderPageWithLayout(<Page />)} />
			<Route path='/quotes' element={renderPageWithLayout(<Quotes />)} />
			<Route path='/galary' element={renderPageWithLayout(<Images />)} />
		</ReoutesLib>
	);
};

export default Routes;
