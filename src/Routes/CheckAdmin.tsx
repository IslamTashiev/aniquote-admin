import React, { FC } from "react";
import { Navigate } from "react-router-dom";

interface CheckAdminProps {
	page: React.ReactNode;
}

const CheckAdmin: FC<CheckAdminProps> = ({ page }) => {
	const isAdmin: boolean = true;
	const isAuthenticated: boolean = true;

	if (isAdmin && isAuthenticated) {
		return page;
	} else {
		return <Navigate to='/login' />;
	}
};

export default CheckAdmin;
