import React, { useState } from "react";
import PageHeader from "../../../../shared/components/layout/PageHeader/PageHeader";
import Screen from "../../../../shared/components/layout/Screen/Screen";
import { Link } from "react-router-dom";
import {
  PlusIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/16/solid";

const Home = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("user") || "{}"));

  return (
    <>
      <PageHeader text="Inicio" />
      <Screen>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Bienvenido {user?.usuario}!
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Explora proyectos y descubre nuevas oportunidades de mejorar tu
              localidad.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <Link to={"/user/projects"}>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <MagnifyingGlassIcon height={30} />
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Explora proyectos
                  </h2>
                  <p className="leading-relaxed text-base">
                    Descubre una amplia gama de proyectos emocionantes que están
                    buscando apoyo en nuestra plataforma.
                  </p>
                </div>
              </Link>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <Link to={"/user/new-proyect"}>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <PlusIcon height={30} />
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Crea un nuevo proyecto
                  </h2>
                  <p className="leading-relaxed text-base">
                    ¿Tienes una idea innovadora que podría mejorar tu localidad?
                    ¡Es hora de convertirla en realidad!
                  </p>
                </div>
              </Link>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <Link to={"/user/my-projects"}>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <UserCircleIcon height={30} />
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Mis proyectos
                  </h2>
                  <p className="leading-relaxed text-base">
                    ¡Bienvenido a tu centro de mando personal para el éxito!
                  </p>
                </div>
              </Link>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <Link to={"/user/track-proyects"}>
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <ArrowTrendingUpIcon height={30} />
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Monitorea proyectos
                  </h2>
                  <p className="leading-relaxed text-base">
                    ¡Mantente informado y actualizado sobre el progreso de tus
                    proyectos favoritos!
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Screen>
    </>
  );
};

export default Home;
