import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { red } from "@mui/material/colors";
import ariel from "../../../public/images/ariel.png";
import vani from "../../../public/images/vani.png";
import Image from "next/image";

const Equipo = () => {
  return (
    <section className="px-4 py-6 mx-auto max-w-8xl sm:px-6 lg:px-48 bg-gradient-to-r from-red-300 to-red-200">
      <div className="pb-12 text-center">
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="mt-12 lg:mt-0 relative flex flex-col items-center text-black bg-gradient-to-r from-stone-300 to-stone-200 border-2 border-slate-500 rounded-lg max-h-screen w-90 h-[270px] hover:bg-red-300 hover:border-red-300 shadow-red-400/50 ease-in-out">
          <div className="absolute -top-10">
            <Image
              className="w-24 h-24 rounded-full object-fit"
              src={ariel}
              alt="Ariel"
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-16">
            <h2 className="mt-2 text-2xl font-bold lg:ml-2 lg:text-center">
              Ariel Calfin
            </h2>
            <p className="mt-2 text-center">
              Estudiante de Desarrollo Web en Academia Numen. 
            </p>
          </div>
          <div className="flex flex-row space-x-4 mt-11 lg:mt-4">
            <a href="https://www.linkedin.com/in/ariel-andres-calfin-4bb7b6289?trk=contact-info">
              <LinkedInIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
            <a href="https://github.com/ArielCalfin">
              <GitHubIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
          </div>
        </div>
        <div className="mt-12 md:mt-12 lg:mt-0 relative flex flex-col items-center text-black bg-gradient-to-r from-stone-300 to-stone-200 border-2 border-slate-500 rounded-lg max-h-screen w-90 h-[270px] hover:bg-red-300 hover:border-red-300 shadow-red-400/50 ease-in-out">
          <div className="absolute -top-10">
            <Image
              className="object-cover w-24 h-24 rounded-full"
              src={vani}
              alt="Vanina"
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-16">
            <h2 className="mt-2 text-2xl font-bold lg:ml-2 lg:text-center">
              Vanina Flores
            </h2>
            <p className="mt-2 text-center">
              Estudiante de Desarrollo Web en Academia Numen. 
            </p>
          </div>
          <div className="flex flex-row space-x-4 mt-11 lg:mt-4">
            <a href="https://www.linkedin.com/in/vanina-flores-9768b9288/">
              <LinkedInIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
            <a href="https://github.com/VaniFlow">
              <GitHubIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
          </div>
        </div>
        <div className="mt-12 md:mt-16 lg:mt-0 relative flex flex-col items-center text-black bg-gradient-to-r from-stone-300 to-stone-200 border-2 border-slate-500 rounded-lg max-h-screen w-90 h-[270px] hover:bg-red-300 hover:border-red-300 shadow-red-400/50 ease-in-out">
          <div className="absolute -top-10">
            <Image
              className="w-24 h-24 rounded-full object-fit"
              src={ariel}
              alt="Ariel"
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-16">
            <h2 className="mt-2 text-2xl font-bold lg:ml-2 lg:text-center">
              Alan Opresnik
            </h2>
            <p className="mt-2 text-center">
             Joven desarrollador con experiencia en React, Next.js, Sass, Tailwind CSS, Node.js y MongoDB.
            </p>
          </div>
          <div className="flex flex-row space-x-4 mt-11 lg:mt-4">
            <a href="#">
              <LinkedInIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
            <a href="#">
              <GitHubIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
          </div>
        </div>
        <div className="mt-12 md:mt-16 lg:mt-10 relative flex flex-col items-center text-black bg-gradient-to-r from-stone-300 to-stone-200 border-2 border-slate-500 rounded-lg max-h-screen w-90 h-[270px] hover:bg-red-300 hover:border-red-300 shadow-red-400/50 ease-in-out">
          <div className="absolute -top-10">
            <Image
              className="w-24 h-24 rounded-full object-fit"
              src={ariel}
              alt="Ariel"
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-16">
            <h2 className="mt-2 text-2xl font-bold lg:ml-2 lg:text-center">
              Gastón Herrera
            </h2>
            <p className="mt-2 text-center">
              Estudiante de Desarrollo Web en Academia Numen.
            </p>
          </div>
          <div className="flex flex-row space-x-4 mt-11 lg:mt-4">
            <a href="#">
              <LinkedInIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
            <a href="#">
              <GitHubIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
          </div>
        </div>
        <div className="mt-10 relative flex flex-col items-center text-black bg-gradient-to-r from-stone-300 to-stone-200 border-2 border-slate-500 rounded-lg max-h-screen w-90 h-[270px] hover:bg-red-300 hover:border-red-300 shadow-red-400/50 ease-in-out">
          <div className="absolute -top-10">
            <Image
              className="w-24 h-24 rounded-full object-fit"
              src={ariel}
              alt="Ariel"
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-16">
            <h2 className="mt-2 text-2xl font-bold lg:ml-2 lg:text-center">
              Guido Aquino
            </h2>
            <p className="mt-2 text-center">
              Estudiante de Desarrollo Web en Academia Numen.
            </p>
          </div>
          <div className="flex flex-row space-x-4 mt-11 lg:mt-4">
            <a href="#">
              <LinkedInIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
            <a href="#">
              <GitHubIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
          </div>
        </div>
        <div className="mt-10 relative flex flex-col items-center text-black bg-gradient-to-r from-stone-300 to-stone-200 border-2 border-slate-500 rounded-lg max-h-screen w-90 h-[270px] hover:bg-red-300 hover:border-red-300 shadow-red-400/50 ease-in-out">
          <div className="absolute -top-10">
            <Image
              className="w-24 h-24 rounded-full object-fit"
              src={ariel}
              alt="Ariel"
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-16">
            <h2 className="mt-2 text-2xl font-bold lg:ml-2 lg:text-center">
              Andrea Aguirre
            </h2>
            <p className="mt-2 text-center">
              Estudiante de Desarrollo Web en Academia Numen.
            </p>
          </div>
          <div className="flex flex-row space-x-4 mt-11 lg:mt-4">
            <a href="#">
              <LinkedInIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
            <a href="#">
              <GitHubIcon className="transition ease-in-out hover:opacity-75" fontSize="large" sx={{ color: red[300] }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipo;
