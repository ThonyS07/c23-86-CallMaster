// stores/authStore.ts
import { create } from "zustand";
import { Incidence } from "@/props/IncidenceProps";
import axios from "axios";

interface IncidencesState {
	incidences: Incidence[];
	deleteIncidences: (id: number) => void;
	getIncidences: () => Promise<void>;
	getIncidencesById: (id: number) => Promise<void>;
}

const endpoint: string = process.env.NEXT_PUBLIC_RENDER_ENDPOINT || "";

const useIncidenceStore = create<IncidencesState>((set) => ({
	incidences: [],
	deleteIncidences: (id) =>
		set((state) => ({
			incidences: state.incidences?.filter((incidence) => incidence.id !== id),
		})),
	getIncidences: async () => {
	
		 try {
				
				if (!endpoint) throw new Error("API endpoint is missing");
				
				const response = await axios.get(`${endpoint}/incidencia`);
				
				set({ incidences: response.data });
			} catch (error) {
				console.error("Error fetching incidences:", error);
			}
	},
	getIncidencesById: async (id) => {
		
		try {
			if (!endpoint) throw new Error("API endpoint is missing");

			const response = await fetch(`${endpoint}/incidencia/${id}`);
			if (!response.ok)
				throw new Error(`HTTP error! Status: ${response.status}`);

			const data = await response.json();
			set({ incidences: data });
		} catch (error) {
			console.error(`Error fetching incidence ${id}:`, error);
		}
	},
}));

export default useIncidenceStore;
