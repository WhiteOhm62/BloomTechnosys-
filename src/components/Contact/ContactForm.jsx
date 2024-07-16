import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, message };

    try {
      const response = await fetch('https://bloomtechnosys-backend.onrender.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="mt-20">
      <form onSubmit={handleSubmit} className="w-full md:w-[617px] mx-auto">
        <div className='flex flex-col md:flex-row md:justify-between'>
          <input
            type="text"
            className='w-full md:w-[300px] h-10 mb-4 md:mr-4 rounded-md p-2'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className='w-full md:w-[300px] h-10 mb-4 md:mr-4 rounded-md p-2'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <textarea
          className='w-full md:w-[617px] h-32 rounded-md p-2 mb-5 custom-placeholder'
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className='btn btn-primary mb-10 bg-red-400 text-white px-6 py-2 rounded-md hover:bg-red-500 transition duration-300 w-full md:w-[617px]'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
