import React, { FC } from "react";
import { Navigate } from "react-router-dom";

interface CheckAdminProps {
	page: React.ReactNode;
	isAuthenticated: boolean;
	isAdmin: boolean;
}

const CheckAdmin: FC<CheckAdminProps> = ({ page, isAdmin, isAuthenticated }) => {
	if (isAdmin && isAuthenticated) {
		return page;
	} else {
		return <Navigate to='/login' />;
	}
};

export default CheckAdmin;
