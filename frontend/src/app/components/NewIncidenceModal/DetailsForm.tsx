import React from "react";
import Input from "../Input";
import Textarea from "../Textarea";
import { Details } from "@/props/ClientsProps";
import Button from "../Button";
import { PlusIcon } from "../Table/PlusIcon";

const DetailsForm = ({
	formData,
	setFormData, // Ahora necesitamos setFormData para actualizar los detalles
}: {
	formData: Details[];
	setFormData: React.Dispatch<React.SetStateAction<Details[]>>;
}) => {
	

	const handleDetailChange = (index: number, field: string, value: string) => {
		const updatedDetails = [...formData];
		updatedDetails[index] = { ...updatedDetails[index], [field]: value };
		setFormData(updatedDetails);
	};

	return (
		<div className='grid grid-cols-2 gap-4 p-4 bg-background1 border border-secondary1 rounded-md shadow-md'>
			{formData.length === 0 ? (
				<h1>No hay detalles relacionados</h1>
			) : (
				formData.map((detail, index) => (
					<div key={index}>
						<Input
							disabledInput={false}
							nombre='Nombre de empleado'
							inputType='text'
							cambio={(field: string, value: string) =>
								handleDetailChange(index, field, value)
							}
							value={detail.nombreEmpleado || ""}
						/>
						<Input
							disabledInput={false}
							nombre='Apellido de empleado'
							inputType='text'
							cambio={(field: string, value: string) =>
								handleDetailChange(index, field, value)
							}
							value={detail.apellidoEmpleado || ""}
						/>
						<Textarea
							disabledTextarea={false}
							nombre='Descripción'
							cambio={(field: string, value: string) =>
								handleDetailChange(index, field, value)
							}
							value={detail.descripcion || ""}
						/>
						<div className='flex flex-col gap-2'>
							<select
								className='w-full h-10 border border-secondary1 bg-background2 p-2 rounded font-montserrat text-primary3 text-sm'
								value={detail.estado || ""}
								onChange={(e) =>
									handleDetailChange(index, "estado", e.target.value)
								}>
								<option value='pendiente'>Pendiente</option>
								<option value='completado'>Completado</option>
							</select>
						</div>
						<div className='flex flex-col gap-2'>
							<select
								className='w-full h-10 border border-secondary1 bg-background2 p-2 rounded font-montserrat text-primary3 text-sm'
								value={detail.prioridad || ""}
								onChange={(e) =>
									handleDetailChange(index, "prioridad", e.target.value)
								}>
								<option value='1'>Alta</option>
								<option value='2'>Media</option>
								<option value='3'>Baja</option>
							</select>
						</div>
					</div>
				))
			)}
			
				
			
		</div>
	);
};

export default DetailsForm;

// import React from "react";
// import Input from "../Input";
// import Textarea from "../Textarea";
// import { DetailsFormPops } from "@/props/DetailsFormProps";
// import { Details } from "@/props/ClientsProps";
// import Button from "../Button";
// import { PlusIcon } from "../Table/PlusIcon";

// const DetailsForm = ({
// 	formData,
// 	handleInputChange,
// }: {
// 	formData: Details[];
// 	handleInputChange: (field: string, value: string) => void;
// 	}) => {
// 	const handleAddClick = () => {

// 	}
// 	return (
// 		<div className='grid grid-cols-2 gap-4 p-4 bg-background1 border border-secondary1 rounded-md shadow-md'>
// 			{!formData ? (
// 				<h1>No hay detalles relacionados</h1>
// 			) : (
// 				formData.map((detail, index) => (
// 					<div key={index}>
// 						<Input
// 							disabledInput={true}
// 							nombre='Nombre de empleado'
// 							inputType='text'
// 							cambio={handleInputChange}
// 							value={detail.nombreEmpleado || ""}
// 						/>
// 						<Input
// 							disabledInput={true}
// 							nombre='Apellido de empleado'
// 							inputType='text'
// 							cambio={handleInputChange}
// 							value={detail.apellidoEmpleado || ""}
// 						/>

// 						<Textarea
// 							disabledTextarea={true}
// 							nombre='Descripción'
// 							cambio={handleInputChange}
// 							value={detail.descripcion || ""}
// 						/>
// 						<div className='flex flex-col gap-2'>
// 							<select
// 								className='w-full h-10 border border-secondary1 bg-background2 p-2 rounded font-montserrat text-primary3 text-sm'
// 								value={detail.estado || ""}
// 								onChange={(e) => handleInputChange("estado", e.target.value)}>
// 								<option value='pendiente'>Pendiente</option>
// 								<option value='completado'>Completado</option>
// 							</select>
// 						</div>
// 						<div className='flex flex-col gap-2'>
// 							<select
// 								className='w-full h-10 border border-secondary1 bg-background2 p-2 rounded font-montserrat text-primary3 text-sm'
// 								value={detail.prioridad || ""}
// 								onChange={(e) =>
// 									handleInputChange("prioridad", e.target.value)
// 								}>
// 								<option value='1'>Alta</option>
// 								<option value='2'>Media</option>
// 								<option value='3'>Baja</option>
// 							</select>
// 						</div>
// 					</div>
// 				))
// 			)}
// 			<Button
// 							onClick={handleAddClick}
// 							className='bg-foreground text-background'
// 							endContent={<PlusIcon />}
// 							size='sm'>
// 							Add New
// 						</Button>
// 		</div>
// 	);
// };

// export default DetailsForm;
