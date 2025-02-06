import React from 'react'
import Input from "../Input";
import { PostIncidenceProps } from '@/props/IncidenceProps';
import { ClientsFormProps } from '@/props/ClientsProps';

const ClientsForm = ({
	formData,
	handleInputChange,
}: {
	formData: ClientsFormProps;
	handleInputChange: (field: string, value: string) => void;
}) => (
	<div className='grid grid-cols-2 gap-4 p-4 bg-background1 border border-secondary1 rounded-md shadow-md'>
		<Input
			disabledInput={true}
			nombre='Nombre'
			inputType='text'
			cambio={handleInputChange}
			value={formData.nombre || ""}
		/>
		<Input
			disabledInput={true}
			nombre='Apellido'
			inputType='text'
			cambio={handleInputChange}
			value={formData.apellido || ""}
		/>
		<Input
			disabledInput={true}
			nombre='DNI'
			inputType='number'
			cambio={handleInputChange}
			value={String(formData.dni) || ""}
		/>
		<Input
			disabledInput={true}
			nombre='Correo'
			inputType='email'
			cambio={handleInputChange}
			value={formData.correo || ""}
		/>
		<Input
			disabledInput={true}
			nombre='Telefono'
			inputType='tel'
			cambio={handleInputChange}
			value={formData.telefono || ""}
		/>
		{/* <Input
			disabledInput={true}
			nombre='Estado'
			inputType='tel'
			value={formData.estado || ""}
			cambio={handleInputChange}
		/> */}
	</div>
);

export default ClientsForm
