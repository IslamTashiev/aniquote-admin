import { IUser } from "@models/user";
import { create } from "zustand";
import * as appActions from "./appActions.ts";
import { FormData } from "@models/newAdmin.ts";

interface IAppStore {
	adminsList: IUser[];
	isAdminsLoaded: boolean;
	getAdminsList: () => void;
	removeAdmin: (id: string) => void;
	createNewAdmin: (params: FormData) => void;
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
	createNewAdmin: async (params: FormData) => {
		await appActions.createNewAdmin(params);
		get().getAdminsList();
	},
}));
