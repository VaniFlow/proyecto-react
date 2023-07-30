import React from 'react'
import Media from "@/components/atoms/Media"

const Footer = () => {
  return (
    <>
  <footer class="relative bg-red-100 pt-8 pb-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between items-center">
        <h4 class="text-2xl fonat-semibold text-blueGray-700 uppercase sm:w-12/12 lg:w-6/12 sm:pl-32 md:pl-48 lg:pl-20">Recibí todas las novedades</h4>
        <form class="relative mt-2 rounded-md shadow-sm sm:w-9/12 lg:w-6/12 sm:mx-auto inset-y-0 right-0">
          <div class="flex items-center py-2 rounded-lg bg-orange-200 px-2">
            <input class="appearance-none bg-white border-none rounded-lg w-full text-gray-700 mr-6 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Tu e-mail" aria-label="Full mail"></input>
            <button class="flex-shrink-0 bg-orange-300 hover:bg-orange-200 border-orange-300 hover:border-orange-400 shadow-lg shadow-orange-500/50 text-sm border-2 text-white italic hover:not-italic py-1 px-2 rounded-lg" type="button">
              Suscribirme
            </button> 
          </div>
        </form>
        
      <div class="flex flex-wrap">
        <div class="flex justify-center w-full px-4 lg:w-2/12">
          <img class="flex justify-center lg:justify-start max-w-full mt-4 sm:w-28 h-28 md:ml-none lg:ml-16 lg:mt-36 shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-orange-500/50" src='https://as1.ftcdn.net/v2/jpg/01/82/81/74/1000_F_182817448_au3VcdtH7cVNvUBScx83QjR5MIemEEBe.jpg'></img>
        </div>
        
        <div class="flex flex-wrap px-4 md:justify-center md:w-10/12 lg:w:5/12">
          <div class="flex flex-wrap w-full items-top mb-6">
            <div class="flex flex-wrap w-full px-4">
              <img class="bg-orange-300 rounded-full mt-4 ml-52 w-28 h-28 max-w-full md:ml-72 md:ww-10/12 shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-orange-500/50" src="https://www.federada.com/turismo/img/persona.png"></img>
              <span class="flex justify-center text-blueGray-500 text-md font-semibold mb-0 mt-2 ml-40 md:ml-56">COMUNICÁTE CON NOSOTROS</span>
              <ul class="list-unstyled ml-48 md:ml-64 text-center">
                <li class="text-blueGray-600 hover:text-blueGray-800 font-semibold block mt-2 pb-2 text-sm">Av. Siempreviva 742</li>
                <li class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm ">+54-11-34567890</li>
                <li class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">goldsandstravel@gmail.com</li>
              </ul>
              <Media />
            </div>
          </div>
          

          <div class="w-full px-4 lg:5/12">
            <span class="flex justify-center text-blueGray-500 uppercase text-md font-semibold mb-2 mt-0 ml-6 md:ml-32">Conocé más sobre nuestra empresa</span>
            <ul class="list-unstyled ml-none mb-none text-center md:ml-28">
              <li class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Sobre Nosotros</li>
              <li class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Blog</li>
              <li class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Fotos de nuestro local</li>
            </ul>
          </div>  
        </div>
      </div>
 
      </div>
      <hr class="my-6 border-blueGray-300"></hr>
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-10/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © {new Date().getFullYear()} <span class="text-blueGray-500 hover:text-gray-800">GOLD SANDS TRAVEL - TODOS LOS DERECHOS RESERVADOS.</span>.
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>
    );
  };

export default Footer