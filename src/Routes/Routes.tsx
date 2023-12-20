import { Routes as ReoutesLib, Route } from "react-router-dom";
import CheckAdmin from "./CheckAdmin";
import Login from "../pages/Login";
import Layout from "../layouts";
import React from "react";
import Home from "../pages/Home";
import Page from "../pages/Page";

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
			<Route path='/' element={renderPageWithLayout(<Home />)} />
			<Route path='/pages' element={renderPageWithLayout(<Page />)} />
		</ReoutesLib>
	);
};

export default Routes;
