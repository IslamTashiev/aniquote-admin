import { IUser } from "@models/user";
import { FC } from "react";
import AdminCard from "./AdminCard";

interface AdminsListProps {
	adminsList: IUser[];
}

const AdminsList: FC<AdminsListProps> = ({ adminsList }) => {
	return adminsList.map((admin) => <AdminCard admin={admin} key={admin._id} />);
};

export default AdminsList;
