import React from 'react';

function Suscribe() {
  return (
    <div className='flex flex-col items-center justify-center mt-20 bg-gray-100 p-8'>
      <div className='text-center'>
        <h1 className='font-semibold text-4xl mb-10 mt-10'>Subscribe Us</h1>
        <p className='mb-10 text-md px-4 md:px-20 lg:px-40'>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        </p>
      </div>

      <div className='w-full flex flex-col md:flex-row items-center justify-center'>
        <input className='h-12 w-full md:w-1/2 lg:w-1/3 rounded-md pl-4 mb-4 md:mb-0' type="text" placeholder='Email Address' />
        <button className='h-12 w-full md:w-40 bg-red-400 rounded-md md:ml-4'>SUBSCRIBE</button>
      </div>
    </div>
  );
}

export default Suscribe;
