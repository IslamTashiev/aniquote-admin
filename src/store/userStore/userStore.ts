import create from "zustand";
import { IUser } from "@models/user";
import * as userActions from "./userActions.ts";

interface IUserStore {
	user: IUser | null;
	isAuthenticated: boolean;
	isUserLoaded: boolean;
	login: (email: string, password: string) => void;
	logout: () => void;
	refresh: () => void;
}

export const useUserStore = create<IUserStore>((set) => ({
	user: null,
	isAuthenticated: false,
	isUserLoaded: false,
	login: async (email, password) => {
		set({ isAuthenticated: false, user: null });
		const data = await userActions.login(email, password);
		set({ isAuthenticated: true, user: data });
	},
	logout: async () => {
		set({ isAuthenticated: false, user: null });
		userActions.logout();
	},
	refresh: async () => {
		set({ isAuthenticated: false, user: null, isUserLoaded: false });
		const data = await userActions.refresh();
		set({ isAuthenticated: true, user: data, isUserLoaded: true });
	},
}));
