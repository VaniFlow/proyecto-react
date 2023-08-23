import React from "react";
import Media from "../atoms/Media";
import Swal from "sweetalert2";
import { useState } from "react";

const phoneNumber = "+541163719960";

const Footer = () => {
  const [form, setForm] = useState("");

  const handleChange = (e) => {
    setForm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No puedes registrarte sin un correo electronico",
      });
    }
  };

  return (
    <section id="footer">
      <footer className="bg-gradient-to-r from-red-400 to-red-300 dark:bg-gray-900 lg:grid lg:grid-cols-5">
        <div className="relative block h-96 lg:col-span-2 lg:h-full">
          <img
            className="absolute inset-0 object-cover w-full h-full bg-cover"
            src="https://img.freepik.com/fotos-premium/estrella-mar-playa-agua-rosa-azul_759095-28502.jpg"
          ></img>
        </div>
        <div className={`px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8`}>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p>
                <span className="tracking-wide text-white uppercase text-md dark:text-gray-600">
                  COMUNICÁTE CON NOSOTROS
                </span>

                <a
                  href={`https://wa.me/${phoneNumber}`}
                  id="number"
                  className="block font-medium text-white hover:opacity-75 dark:text-white sm:text-xl"
                >
                  +54 11-12345678
                </a>
              </p>

              <ul className="mt-8 space-y-1 text-sm text-white dark:text-gray-200">
                <li>De lunes a viernes: 10am - 5pm</li>
                <li>E-mail: goldsandstravel@gmail.com</li>
              </ul>
              <Media />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="font-medium text-white dark:text-white">
                  Servicios
                </p>

                <ul className="mt-6 space-y-4 text-sm cursor-pointer">
                  <li className="text-white transition hover:opacity-75 dark:text-gray-200">
                    Reservas
                  </li>

                  <li className="text-white transition hover:opacity-75 dark:text-gray-200">
                    Viajes a medida
                  </li>

                  <li className="text-white transition hover:opacity-75 dark:text-gray-200">
                    Asistencia al viajero
                  </li>

                  <li className="text-white transition hover:opacity-75 dark:text-gray-200">
                    Excursiones
                  </li>

                  <li className="text-white transition hover:opacity-75 dark:text-gray-200">
                    Transfers
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white dark:text-white">
                  Nuestra empresa
                </p>

                <ul className="mt-6 space-y-4 text-sm cursor-pointer">
                  <li className="text-white transition hover:opacity-75 dark:text-gray-200">
                    Sobre nosotros
                  </li>

                  <li className="text-white transition hover:opacity-75 dark:text-gray-200">
                    Blog de viajes
                  </li>

                  <li className="text-white transition hover:opacity-75 dark:text-gray-200">
                    Nuestro local
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-24 mt-12 border-t border-gray-100 dark:border-gray-800">
            <div className="items-center sm:flex sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center justify-center mx-auto lg:my-8">
                <h4 className="mt-6 uppercase text-md fonat-semibold text-blueGray-700 sm:w-12/12 lg:my-auto lg:mb-1">
                  Recibí todas las novedades
                </h4>

                <form
                  onSubmit={handleSubmit}
                  className="relative inset-y-0 right-0 mt-2 rounded-md shadow-sm sm:w-9/12 sm:ml-0 lg:my-auto"
                >
                  <div className="flex items-center px-2 py-2 bg-red-200 rounded-lg">
                    <input
                      className="w-full px-2 py-1 mr-6 leading-tight text-gray-700 bg-white border-none rounded-lg appearance-none ring ring-red-300 hover:ring-slate-300"
                      type="email"
                      placeholder="Tu e-mail"
                      onChange={handleChange}
                      value={form}
                      aria-label="Full mail"
                    ></input>
                    <input
                      className="px-2 py-1 text-sm italic text-white bg-red-300 border-2 border-red-300 rounded-lg shadow-lg hover:bg-red-300 hover:border-red-300 shadow-red-400/50 hover:not-italic h-7"
                      type="submit"
                      value="Suscribirme"
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="h-12 pt-12 mt-12 border-t border-gray-100 dark:border-gray-800">
            <div className="flex justify-center">
              <p className="text-sm text-gray-500 dark:text-gray-600 sm:mt-0">
                Copyright © {new Date().getFullYear()} GOLD SANDS TRAVEL - TODOS
                LOS DERECHOS RESERVADOS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
