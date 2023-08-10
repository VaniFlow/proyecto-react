import React from "react";
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';




const Proveedores = () => {
  return (
    <div 
    id="provedores"
    className="font-bold  p-4 bg-gradient-to-b  from-[#F9A1A1] to-red-400 dark:bg-gray-900"
>

      <section className="pb-32 pt-24 pr-[6rem] pl-[6rem] text-center">
        <h2 className="mb-16 text-3xl font-bold">
          Nuestros Proveedores
        </h2>
        
    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
      <div className="mb-12 md:mb-0">
        <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
        <DirectionsCarFilledOutlinedIcon className="text-3xl"/>
     </div>
        <h5 className="mb-4 text-lg font-bold">Marriott International</h5>
        <p className="text-white-900">
          Con 31 marcas y más de 8.500 hoteles en 138 países y territorios brindan a las personas más formas de conectarse, disfrutar y ampliar su mundo. Destacan por su atención al detalle, variedad de opciones, y un enfoque en la satisfacción del cliente.
        </p>
      </div>

      <div className="mb-12 md:mb-0">
      <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
     <FlightTakeoffOutlinedIcon className=" text-3xl"/>
     </div>
        <h5 className="mb-4 text-lg font-bold">Etihad Airways</h5>
        <p className="text-white-900">
        Referente en la industria, ofreciendo conexiones aéreas globales de alta calidad. Con una experiencia contrastada, son la elección ideal para viajeros que buscan conexiones aéreas confiables y satisfactorias.
        </p>
      </div>

      <div className="mb-12 md:mb-0">
      <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
     <HotelOutlinedIcon className=" text-3xl"/>
     </div>
        <h5 className="mb-4 text-lg font-bold">Assist Card</h5>
        <p className="text-white-900">
          Empresa Lider en ofrecer servicios de protección y apoyo durante los desplazamientos. Destacan por su amplia gama de coberturas, atención al cliente las 24 horas y respuesta efectiva ante emergencias.
        </p>
      </div>
    </div>
  </section>
  
</div>

  )
}

export default Proveedores