import React from 'react'
import carritoTriste from "../../../public/images/carritoTriste.png"
import Image from 'next/image'

const CartEmpty = () => {
  return (
    <div className='flex flex-col items-center'>
        <Image width={250} src={carritoTriste}/>
        <h3 className='text-center font-bold'>Tu carrito esta vacio, <br/> ¡LLENALO DE VIAJES IMPERDIBLES!</h3>
    </div>
  )
}

export default CartEmpty