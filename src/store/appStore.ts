import { IUser } from "@models/user";
import { create } from "zustand";
import * as appActions from "./appActions.ts";

interface IAppStore {
	adminsList: IUser[];
	isAdminsLoaded: boolean;
	getAdminsList: () => void;
	removeAdmin: (id: string) => void;
}

export const useAppStore = create<IAppStore>((set, get) => ({
	adminsList: [],
	isAdminsLoaded: false,
	getAdminsList: async () => {
		set({ isAdminsLoaded: false, adminsList: [] });
		const data = await appActions.getAdminsList();
		set({ isAdminsLoaded: true, adminsList: data });
	},
	removeAdmin: async (id: string) => {
		await appActions.removeAdmin(id);
		get().getAdminsList();
	},
}));
