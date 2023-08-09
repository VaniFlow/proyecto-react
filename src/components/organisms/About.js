import React from "react";


const About = () => {
  return (
    <section class="bg-gradient-to-r from-red-400 to-red-200 dark:bg-gray-900 lg:grid lg:grid-cols-5">
        <div class="px-4 py-4 sm:px-6 lg:col-span-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8">
          <div>
            
              <h2 class="text-md text-center uppercase tracking-wide text-gray-500 dark:text-gray-600">
                SOBRE NOSOTROS
              </h2>

              <p class="block font-medium text-gray-900  dark:text-white sm:text-xl">

              GOLD SANDS TRAVEL es una destacada empresa de turismo que ofrece experiencias inolvidables y personalizadas en destinos diversos. Nuestros guías expertos te acompañarán en cada paso del viaje, y nos comprometemos con un enfoque sostenible y responsable. </p>
              
              <br></br>
              <p class="block font-medium text-gray-900  dark:text-white sm:text-xl">
              Nuestra dedicación a la excelencia y nuestro compromiso con la satisfacción del cliente nos ha convertido en la elección preferida para miles de viajeros de todo el mundo. Ya sea que viajes solo, con amigos, en pareja o en familia, en GOLD SANDS TRAVEL te garantizamos una experiencia inolvidable llena de emociones, descubrimientos y momentos memorables.</p>
              <br></br>
              <p class="block font-medium text-gray-900  dark:text-white sm:text-xl">
              Así que, ¿qué estás esperando? ¡Únete a nosotros en una aventura única y emocionante en el mundo del turismo! Descubre el mundo a través de nuestros ojos, y te prometemos que te enamorarás de cada lugar que visites </p>
              <br></br>
              <p class="block font-medium text-gray-900  dark:text-white sm:text-xl">
              ¡Bienvenido a la aventura con GOLD SANDS TRAVEL!
              </p>
          </div>

              <div class="bg-fixed mb-12 lg:mb-0">
            <img
              class=" w-full rounded-lg shadow-lg dark:shadow-black/20" alt=""
              src="https://qrk.mx/wp-content/uploads/2017/06/vacaciones-verano.png"
            ></img>
          </div>
       </div>
      </div>
    </section>    
  );
};

export default About;
