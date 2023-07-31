import React from "react";
import Media from "../atoms/Media";

const Lalala = () => {
  return (
    <footer class="bg-gradient-to-r from-red-400 to-red-200 dark:bg-gray-900 lg:grid lg:grid-cols-5">
      <div class="relative block h-96 lg:col-span-2 lg:h-full">
        <img
          class="absolute bg-cover inset-0 h-full w-full object-cover"
          src="https://img.freepik.com/fotos-premium/estrella-mar-playa-agua-rosa-azul_759095-28502.jpg"
        ></img>
      </div>

      <div class="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span class="text-md uppercase tracking-wide text-gray-500 dark:text-gray-600">
                COMUNICÁTE CON NOSOTROS
              </span>

              <a
                href="#"
                class="block font-medium text-gray-900 hover:opacity-75 dark:text-white sm:text-xl"
              >
               +54 11-12345678
              </a>
            </p>

            <ul class="mt-8 space-y-1 text-sm text-gray-700 dark:text-gray-200">
              <li>De lunes a viernes: 10am - 5pm</li>
              <li>E-mail: goldsandstravel@gmail.com</li>
            </ul>
            <Media/>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p class="font-medium text-gray-900 dark:text-white">Servicios</p>

              <ul class="mt-6 space-y-4 text-sm cursor-pointer">
                <li
                    class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Reservas

                </li>

                <li
                    class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Viajes a medida
                </li>

                <li
                    class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Asistencia al viajero
                </li>

                <li
                    class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Excursiones
                </li>

                <li
                    class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Transfers
                </li>
              </ul>
            </div>

            <div>
              <p class="font-medium text-gray-900 dark:text-white">Nuestra empresa</p>

              <ul class="mt-6 space-y-4 text-sm cursor-pointer">
                <li
                    class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Sobre nosotros
                </li>

                <li
                    class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Blog de viajes
                </li>

                <li
                    class="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Nuestro local
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-12 h-24 border-t border-gray-100 dark:border-gray-800">
          <div class="sm:flex sm:items-center sm:justify-between items-center">
            <div class="flex flex-wrap justify-center items-center mx-auto lg:my-8">
              <h4 class="text-md fonat-semibold text-blueGray-700 uppercase mt-6 sm:w-12/12 lg:my-auto lg:mb-1">
                Recibí todas las novedades
              </h4>
              <form class="relative mt-2 rounded-md shadow-sm sm:w-9/12 sm:ml-0 lg:my-auto inset-y-0 right-0">
                <div class="flex items-center py-2 rounded-lg bg-red-200 px-2">
                  <input
                    class="appearance-none bg-white border-none rounded-lg w-full text-gray-700 mr-6 py-1 px-2 leading-tight ring ring-red-300 hover:ring-slate-300"
                    type="text"
                    placeholder="Tu e-mail"
                    aria-label="Full mail"
                  ></input>
                  <button
                    class="flex-shrink-0 bg-red-300 hover:bg-red-300 border-red-300 hover:border-red-300 shadow-lg shadow-red-400/50 text-sm border-2 text-white italic hover:not-italic py-1 px-2 rounded-lg"
                    type="button"
                  >
                    Suscribirme
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="mt-12 h-12 border-t border-gray-100 pt-12 dark:border-gray-800">
          <div class="flex justify-center">
            <p class="text-sm text-gray-500 dark:text-gray-600 sm:mt-0">
            Copyright © {new Date().getFullYear()} GOLD SANDS TRAVEL - TODOS LOS DERECHOS RESERVADOS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Lalala;
