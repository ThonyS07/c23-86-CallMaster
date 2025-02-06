type Client = {
    id: number;
    nombre: string;
    apellido: string;
    dni: number;
    correo: string;
    telefono: string;
    estado: string;
}
type Service = {
    id: number;
    nombre: string;
    descripcion: string;
}
type Details = {
    idEmpleado: number;
    nombreEmpleado: string;
    apellidoEmpleado: string;
    fechaDeModificacion: string;
    descripcion: string;
    estado: string;
    prioridad: string;
}
export interface Incidence {
	id: number;
	idCliente: string;
	cliente: Client;
	servicio: Service;
	descripcion: string;
	fechaDeAlta: string;
	detalles: Details[];
	[key: string]: any;
}

export interface PostIncidenceProps {
    idCliente: number;
    idServicio: number;  
    descripcion: string;
}

export interface PostIncidencesDetailsProps {
    idEmpleado: number;
    descripcion: string;
    estado: string;
    prioridad: number;
}