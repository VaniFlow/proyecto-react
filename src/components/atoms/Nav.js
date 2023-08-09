


import React from 'react'
import { Button, Navbar } from 'flowbite-react';





const Nav = () => {
  return (
   <>
    
    <Navbar className=' bg-white/10 w-full fixed  z-30  backdrop-blur'
      fluid
      rounded
    >
      <Navbar.Brand href="https://flowbite-react.com" >
      <img src='https://i.postimg.cc/kgT9tpds/Gold-Sands-Tours.png' border='0' alt='Gold-Sands-Tours' className='h-[60px]'/>
       
      </Navbar.Brand>
      <div className="flex md:order-2">
        <button className="bg-red-400 hover:bg-red-200 rounded-[10px] p-[5px] text-white hover:text-red-400">
          <p className='text-[20px] p-[10]'>Carrito</p>
        </button>
        <Navbar.Toggle className='bg-transparent border-none' />
      </div>
      <Navbar.Collapse >
        <Navbar.Link className='bg-red-200'
          active
          href="#inicio"
        >
          <p className='text-[20px] text-white hover:text-red-300'> 
            Inicio
          </p>
        </Navbar.Link>
        <Navbar.Link href="#destinos" >
          <p className='text-[20px] text-white hover:text-red-300'>Destinos</p>
        </Navbar.Link>
        <Navbar.Link href="#about" className='text-[25px]'>
          <p className='text-[20px] text-white hover:text-red-300'>Sobre Nosotros</p>
        </Navbar.Link>
       
        <Navbar.Link active href="#footer" className='text-[20px]'>
          <p className='text-[20px] text-white hover:text-red-300'>Contacto</p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    
    
    
    </>
   )
}

export default Nav