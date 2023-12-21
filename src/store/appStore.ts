import { create } from "zustand";

interface IAppStore {}

const useAppStore = create<IAppStore>((set, get) => ({}));

export const useAppState = useAppStore.getState;
