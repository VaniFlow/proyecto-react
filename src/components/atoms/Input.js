import { useState } from 'react'

const [email, setEmail] = useState ();

const Input = () => {
  return (
    <>
    <div className='relative flex flex-row w-8'>
        <input placeholder='E-mail' onChange={e => setEmail (e.target.value)}> 
        </input>
        <button onClick={() => handleInput ()}>Confirmar</button>

     
    </div>
      </>

  )
}
//require('@tailwindcss/forms')
<form class="relative mt-2 rounded-md shadow-sm sm:w-9/12 lg:w-6/12 sm:mx-auto inset-y-0 right-0 flex items-center">
<span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"></span>
  <input type="text" name="e-mail" id="e-mail" class="block w-full rounded-lg border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Tu e-mail@"></input>
  <button type='submit' class="rounded-sm w-24 text-black italic hover:not-italic font-medium ring-2 hover:ring-6">Suscribirme</button>
</form>


export default Input