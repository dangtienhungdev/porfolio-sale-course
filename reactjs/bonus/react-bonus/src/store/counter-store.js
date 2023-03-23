import { create } from 'zustand';

export const useBearStore = create((set) => ({
	count: 13, // initial
	increase: () => set((state) => ({ ...state, count: state.count + 1 })),
	decrease: () => set((state) => ({ ...state, count: state.count - 1 })),
}));
