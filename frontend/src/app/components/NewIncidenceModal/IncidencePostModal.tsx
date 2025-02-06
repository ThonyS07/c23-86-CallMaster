import React, { useState } from "react";
import Button from "@/app/components/Button";
import Textarea from "../Textarea";
import { IncidencePostModalProps } from "@/props/IncidencePostModalProps";
import Section from "./FormSections";
import ClientsForm from "./ClientsForm";
import ServicesForm from "./ServicesForm";
import DetailsForm from "./DetailsForm";
import { Details } from "@/props/ClientsProps";

const IncidencePostModal = ({
	formData,
	statuses,
	cambio,
	handleDecline,
	handleFormSubmit,
	handleInputChange,
}: IncidencePostModalProps) => {
	// const detalles =formData.incidenciaDTOS[0].detalles ? formData.incidenciaDTOS[0].detalles : [];
	const [detalles, setDetalles] = useState<Details[]>(
		formData.incidenciaDTOS?.[0]?.detalles || []
	);

	<DetailsForm formData={detalles} setFormData={setDetalles} />;

	// const detalles = formData.incidenciaDTOS?.[0]?.detalles || [];
	return (
		// El onClick en este div cierra el modal
		<div
			className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
			onClick={handleDecline}>
			{/* Se evita que el clic en el contenido se propague y cierre el modal */}
			<div
				className='bg-background1 dark:bg-background3 p-6 rounded-lg w-full max-w-[90%] shadow-lg'
				onClick={(e) => e.stopPropagation()}>
				<h2 className='text-xl font-bold font-montserrat text-primary3 mb-4'>
					Agregar nueva incidencia
				</h2>
				<form onSubmit={handleFormSubmit} className='grid grid-cols-2 gap-4'>
					<div className='flex flex-col gap-4'>
						<div className='col-span-1'>
							<Section title='Datos del cliente'>
								<ClientsForm
									formData={formData.clienteDTO}
									handleInputChange={cambio}
								/>
							</Section>
						</div>
						<div className='col-span-1'>
							<Section title='Servicio'>
								<ServicesForm
									formData={formData.servicioDTOS}
									handleInputChange={handleInputChange}
								/>
							</Section>
						</div>

						<div className='col-span-1'>
							<Section title='Descripción'>
								<Textarea
									disabledTextarea={false}
									nombre='Descripción'
									cambio={(field:string, value:string) => cambio(field, value)}
									value={formData.incidenciaDTOS?.[0]?.descripcion || ""}
								/>
							</Section>
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<Section title='Detalles de la incidencia'>
							<DetailsForm formData={detalles} setFormData={setDetalles} />
						</Section>
					</div>

					<div className='flex justify-end gap-2'>
						<Button
							type='button'
							buttonName='Cancel'
							disableOptions={false}
							handler={handleDecline}
						/>
						<Button type='submit' buttonName='Save' disableOptions={false} />
					</div>
				</form>
			</div>
		</div>
	);
};

export default IncidencePostModal;
