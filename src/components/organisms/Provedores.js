import React from "react";
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';




const Proveedores = () => {
  return (
    <section id="proveedores">
    <div 
   
    className="font-bold h-auto flex items-center  bg-gradient-to-b from-[#03c3ec] to-red-200"
>

      <section className="pb-[2%] pt-[3%] pr-[6rem] pl-[6rem] text-center">
        <h2 className="mb-16 text-3xl font-bold">
          Nuestros Proveedores
        </h2>
        
    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
      <div className="mb-12 md:mb-0">
        <div className="inline-block p-4 mb-6 rounded-md bg-primary-100 text-primary">
        <DirectionsCarFilledOutlinedIcon fontSize="large" className="text-5xl"/>
     </div>
        <h5 className="mb-4 text-lg font-bold">Marriott International</h5>
        <p className="text-white-900">
          Con 31 marcas y más de 8.500 hoteles en 138 países y territorios brindan a las personas más formas de conectarse, disfrutar y ampliar su mundo. Destacan por su atención al detalle, variedad de opciones, y un enfoque en la satisfacción del cliente.
        </p>
      </div>

      <div className="mb-12 md:mb-0">
      <div className="inline-block p-4 mb-6 rounded-md bg-primary-100 text-primary">
     <FlightTakeoffOutlinedIcon fontSize="large" className="text-5xl "/>
     </div>
        <h5 className="mb-4 text-lg font-bold">Etihad Airways</h5>
        <p className="text-white-900">
        Referente en la industria, ofreciendo conexiones aéreas globales de alta calidad. Con una experiencia contrastada, son la elección ideal para viajeros que buscan conexiones aéreas confiables y satisfactorias.
        </p>
      </div>

      <div className="mb-12 md:mb-0">
      <div className="inline-block p-4 mb-6 rounded-md bg-primary-100 text-primary">
     <HotelOutlinedIcon fontSize="large" className="text-5xl "/>
     </div>
        <h5 className="mb-4 text-lg font-bold">Assist Card</h5>
        <p className="text-white-900">
          Empresa Lider en ofrecer servicios de protección y apoyo durante los desplazamientos. Destacan por su amplia gama de coberturas, atención al cliente las 24 horas y respuesta efectiva ante emergencias.
        </p>
      </div>
    </div>
  </section>
  
</div>
</section>
  )
}

export default Proveedores