import React from 'react'

function Suscribe() {
  return (
    <div className='flex items-center justify-evenly flex-col mt-20 bg-gray-100 p-8'>
        <div className='flex-row justify-center items-center'>
            <h1 className='text-center font-semibold text-4xl mb-10 mt-10'>Suscribe Us</h1>
            <p className='mb-10 text-md'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
        </div>

        <div className='ml-[550px] flex-row items-center justify-center w-full'>
            <input className='h-12 w-[50%] rounded-md pl-4' type="text" placeholder='Email Address' />
            <button className='h-12 ml-4 w-40 bg-red-400 rounded-md'>SUSCRIBE</button>
        </div>
    </div>
  )
}

export default Suscribe