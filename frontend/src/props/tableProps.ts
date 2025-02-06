type Handler = {
	apiUrl: string;
	id: string;
}

type Status = {
	uid: string;
	name: string;
};

// Data genérico para aceptar diferentes estructuras
export type Data<T = Record<string, any>> = T;

export type TableProps<T = Record<string, any>> = {
	initialVisibleColumns: string[];
	statuses: Status[];
	sortable: string[];
	data: Data<T>[];
	actions?: boolean;
	viewClick?: (id: string) => void;
	editClick?: (id: string) => void;
	deleteClick?: (id: string) => void;
	handleAddClick?: () => void;
	modalPost?: React.ReactNode;
	onRowSelect?: (data: Data) => void;
}