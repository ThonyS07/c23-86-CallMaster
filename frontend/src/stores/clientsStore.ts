// stores/authStore.ts
import { Client, ClientInfo } from "@/props/ClientsProps";
import { create } from "zustand";
import { clientes } from "@/utils/Data/clientes";

interface ClientsState {
	clientes: ClientInfo[];
	cliente: Client;
	getClientes: () => Promise<void>;
	getClientesById: (id: number) => Promise<void>;
}

const endpoint: string = process.env.NEXT_PUBLIC_RENDER_ENDPOINT || "";

const useClientStore = create<ClientsState>((set) => ({
	clientes: [],
	cliente: {
		clienteDTO: {
			id: 0,
			nombre: "",
			apellido: "",
			dni: 0,
			correo: "",
			telefono: "",
		}, 
		servicioDTOS: [], 
		incidenciaDTOS: [], 
	},
	getClientes: async () => {
		set({ clientes: clientes });
	},
	getClientesById: async (id) => {
		console.log('iniciando Fetch')
		const response = await fetch(`${endpoint}/clientes/${id}`);
		const data = await response.json();
		console.log(data)
		set({ cliente: data });
	},
}));

export default useClientStore;
