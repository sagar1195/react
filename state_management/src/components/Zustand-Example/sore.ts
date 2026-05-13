import { create } from "zustand";

interface data {
	count: number;
	name: string;
	increment: () => void;
	capitalizeName: () => void;
}

type store = (
	set: (partial: Partial<data> | ((state: data) => Partial<data>)) => void,
	get: () => data,
) => data;

const store: store = (set, get) => ({
	count: 0,
	name: "zustand",
	increment: () => set((state) => ({ count: state.count + 1 })),
	capitalizeName: () => {
		const { name } = get();
		set({ name: name.charAt(0).toUpperCase() + name.slice(1) });
	},
});

const useMyStore = create<data>(store);

export default useMyStore;
