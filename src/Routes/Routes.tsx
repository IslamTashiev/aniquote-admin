import { Routes as ReoutesLib, Route } from "react-router-dom";
import CheckAdmin from "./CheckAdmin";
import Login from "../pages/Login";
import Layout from "../layouts";
import React from "react";
import Home from "../pages/Home";
import Page from "../pages/Page";
import Quotes from "../pages/Quotes";

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
			<Route path='/quotes' element={renderPageWithLayout(<Quotes />)} />
		</ReoutesLib>
	);
};

export default Routes;
