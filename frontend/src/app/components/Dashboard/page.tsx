import { useState } from "react";
import StatisticsSummary from "../../components/StatisticsSummary";
import TicketsTable from "../TicketsTable";
import useTicketsStats from "@/hooks/useTicketsStats";

export default function Dashboard() {
  // Hook personalizado para obtener datos de estadísticas y tickets
  const { stats, recentTickets } = useTicketsStats();

  // Estado para manejar la estadística seleccionada
  const [selectedState, setSelectedState] = useState<string | null>(null);

  // Función para manejar clics en las tarjetas de estadísticas
  const handleCardClick = (state: string) => {
    setSelectedState(state); // Cambiar el estado según la tarjeta seleccionada
  };

  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      {/* Título de la página */}
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Componente para mostrar estadísticas */}
      <StatisticsSummary stats={stats} onCardClick={handleCardClick} />

      {/* Tabla dinámica según el estado seleccionado */}
      {selectedState && recentTickets[selectedState] && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">
            Tickets: {selectedState}
          </h2>
          <TicketsTable tickets={recentTickets[selectedState]} />
        </div>
      )}
    </section>
  );
}
