import React from "react";
import Input from "../Input";
import Textarea from "../Textarea";
import { PostIncidenceProps } from "@/props/IncidenceProps";
import { ServicesFormProps } from "@/props/ServicesFormProps";
import { Service } from "@/props/ClientsProps";
import { h1 } from "framer-motion/client";

const ServicesForm = ({
	formData,
	handleInputChange,
}: {
	formData: Service[];
	handleInputChange: (field: string, value: string) => void;
}) => {
	return (
		<div className='p-4 bg-background1 border border-secondary1 rounded-md shadow-md'>
			{!formData ? (
				<h1>No hay servicios relacionados</h1>
			) : (
				formData.map((service, index) => (
					<div key={index}>
						

						<Textarea
							disabledTextarea={true}
							nombre='Descripcion'
							cambio={handleInputChange}
							value={service.descripcion || ""}
						/>
					</div>
				))
			)}
		</div>
	);
};

export default ServicesForm;
