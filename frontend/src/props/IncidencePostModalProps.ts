import { Client, ClientsFormProps } from "./ClientsProps";
import { DetailsFormPops } from "./DetailsFormProps";
import { Incidence, PostIncidenceProps } from "./IncidenceProps";
import { ServicesFormProps } from "./ServicesFormProps";

type Status = {
	uid: string;
	name: string;
};

type Data<T = Record<string, any>> = T;

export type IncidencePostModalProps<T = Record<string, any>> = {
	cambio:  (field: string, value: string) => void;
	formData: Data;
	statuses: Status[];
	handleDecline: () => void;
	handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	handleInputChange: (field: string, value: string) => void;
};
