




const Cards = ({card}) => {
  return (
    <>
     <div className="relative w-80 h-[450px] rounded-[10px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.25)] mb-[5px] text-left">
  <div className="opacity-70">
    <img
      src={card.imgfondo}
      className="w-full h-full object-cover absolute"
      alt="Fondo"
    />
  </div>

  <div className="w-full z-[20] transition-[0.5s] p-5 left-0 -bottom-2.5">
    <img
      src={card.imglogo}
      className="max-w-[100px] z-[300] relative"
      alt="Logo"
    />
    <h3 className="text-[1.2em] font-bold text-white font-[bold] z-[321] relative opacity-100">
      {card.titulo}
    </h3>
    <div className="relative">
      <p className="text-white rounded ml-0 mr-[5px] my-0 p-[5px] font-bold">
        {card.textodescripcion}
      </p>
    </div>
    <div className="h-[80px] w-full relative z-[327]">
      <h4 className="text-white mt-2.5 z-[329] text-[1.3em no-underline]">
        Comodidades
      </h4>
      <ul className="relative flex gap-[5px] mt-2.5">
        {/* Lista de íconos de comodidades */}
      </ul>
      <div className="absolute bottom-0 left-0 w-full flex items-center justify-between">
        <a
          href="#"
          className="rounded-[10px] bg-customRed text-1em text-white text-decoration-none px-5 py-2 border-radius background-transition"
        >
          Agregar a carrito
        </a>
        <a
          className="text-[1em] no-underline text-white transition-all duration-[0.3s] p-2"
          href="#"
        >
          ${card.precio}
        </a>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Cards;
