import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r font-bold from-red-400 to-red-200 p-4 dark:bg-gray-900"
      style={{ boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}
    >
      <div className="px-4 py-4 sm:px-6 lg:col-span-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
          <div className="bg-fixed mb-12 lg:mb-0 order-last lg:order-first">
            <img
              className="w-full rounded-lg shadow-lg dark:shadow-black/20"
              alt=""
              src="https://qrk.mx/wp-content/uploads/2017/06/vacaciones-verano.png"
            />
          </div>
          <div className="text-center lg:text-left">
            <div className="relative block p">
              <h2 className="text-md uppercase tracking-wide text-white-900 text-center text-4xl dark:text-gray-600">
                SOBRE NOSOTROS
              </h2>
              <div className="  h-1 bg-[#F9F1DE] m-0 bottom-0 transform"></div>
            </div>
            <p className="block font-medium text-white-900 dark:text-white sm:text-xl text-center">
              GOLD SANDS TRAVEL es una destacada empresa de turismo que ofrece
              experiencias inolvidables y personalizadas en destinos diversos.
              Nuestros guías expertos te acompañarán en cada paso del viaje, y
              nos comprometemos con un enfoque sostenible y responsable.
            </p>
            <p className="block font-medium text-white-900 dark:text-white sm:text-xl text-center">
              Nuestra dedicación a la excelencia y nuestro compromiso con la
              satisfacción del cliente nos ha convertido en la elección
              preferida para miles de viajeros de todo el mundo. Ya sea que
              viajes solo, con amigos, en pareja o en familia, en GOLD SANDS
              TRAVEL te garantizamos una experiencia inolvidable llena de
              emociones, descubrimientos y momentos memorables.
            </p>
            <br></br>
            <p className="block font-medium text-white-900 dark:text-white sm:text-xl text-center">
              ¡Bienvenido a la aventura con GOLD SANDS TRAVEL!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
