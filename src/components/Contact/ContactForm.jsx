import React from 'react'

function ContactForm() {
  return (
    <div>
    <div className='mt-20 w-full'>
      <input type="text" className='w-[300px] h-10 mr-4 rounded-md p-2' placeholder='Name' />
      <input type="text" className='w-[300px] h-10 mr-4 rounded-md p-2' placeholder='Email'/>
    </div>
    <div>
      <input type="text" className='w-[617px] h-32 mr-4 rounded-md p-2 align-top mt-5 mb-5 custom-placeholder' placeholder='Message' />
    </div>
    <div>
      <button className='btn btn-primary bg-red-400 text-white px-6 py-2 rounded-md hover:bg-red-500 transition duration-300 w-[617px]'>Submit</button>
    </div>
</div>
  )
}

export default ContactForm