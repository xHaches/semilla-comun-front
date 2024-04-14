import React, { useState } from "react";
import PageHeader from "../../../../shared/components/layout/PageHeader/PageHeader";
import Screen from "../../../../shared/components/layout/Screen/Screen";
import { v4 as uuid } from "uuid";
import ModalPay from "../../../../shared/components/layout/ModalPay/ModalPay";
import { useTrackProyectosQuery } from "../../../../gql/schema";
import { UTCToInputDate } from "../../../../shared/helpers/UTCToInputDate";

const TrackProyects = () => {
  const [isModalPayOpen, setIsModalPayOpen] = useState(false);
  const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));

  const { data, refetch } = useTrackProyectosQuery({
    variables: {
      usuario_id: user.usuario_id,
    },
  });

  const [proyectIdSelected, setProyectIdSelected] = useState("");

  return (
    <>
      <PageHeader text="Mis inversiones" />
      <Screen>
        <ul role="list" className="divide-y divide-gray-100">
          {data?.usuario.proyectos_contribuidos.map((project) => (
            <li
              className="flex justify-between gap-x-6 py-5 cursor-pointer"
              key={uuid()}
              onClick={() => {
                setProyectIdSelected(project.proyecto_id);
                setIsModalPayOpen(true);
              }}
            >
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {project.nombre}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {project.descripcion}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  ${project.saldo}/${project.meta_recaudacion}
                </p>
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">
                    fecha límite de fondeo:{" "}
                    {UTCToInputDate(project.fecha_limite_recaudacion)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ModalPay
          isModalOpen={isModalPayOpen}
          title="Invertir"
          description="Escribe el monto"
          onClick={(isConfirmed) => {
            setIsModalPayOpen(false);
            if (isConfirmed) {
              refetch();
            }
          }}
          proyectId={proyectIdSelected}
        />
      </Screen>
    </>
  );
};
export default TrackProyects;
