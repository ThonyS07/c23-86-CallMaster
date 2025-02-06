import { PostIncidenceProps } from "@/props/IncidenceProps";

const endpoint = process.env.NEXT_PUBLIC_RENDER_ENDPOINT || "";

const postIncidences= async (incidence: PostIncidenceProps) => {
	const response = await fetch(`${endpoint}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(incidence),
	});
	const data = await response.json();
	
};

export default postIncidences