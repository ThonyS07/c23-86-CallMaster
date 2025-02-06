type Pago = {
	fechaPago: string;
	fechaVencimiento: string;
	montoPagado: number;
};

export type Details = {
	idEmpleado: number;
	nombreEmpleado: string;
	apellidoEmpleado: string;
	fechaDeModificacion: string;
	descripcion: string;
	estado: string;
	prioridad: number;
};

export interface Service {
	id: number | null;
	nombre: string;
	descripcion: string;
	precio: number | null; // Add this line
	fechaAlta: string | null;
	monto: number | null;
	historialPagos: Pago[] | null; // Assuming historialPagos is an array or object
}

export type ClientInfo =  {
    id: number;
    nombre: string;
    apellido: string;
    dni: number;
    correo: string;
    telefono: string;
}
interface Incidence {
    id: number;
    idServicio: number;
    servicio: Service;
    descripcion: string;
    fechaDeAlta: string;
    detalles: Details[];
}


export interface Client {
    clienteDTO: ClientInfo;
    servicioDTOS: Service[];
    incidenciaDTOS: Incidence[];
 }

export interface ClientsFormProps {
	id: number;
	nombre: string;
	apellido: string;
	dni: number;
	correo: string;
	telefono: string;
	
}
