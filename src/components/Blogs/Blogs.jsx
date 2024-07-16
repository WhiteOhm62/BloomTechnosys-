import React from 'react';

function Blogs() {
  return (
    <div id="blog" className='w-full'>
      <div className='mt-20 mb-20'>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-screen-lg px-4">
            <div className="text-center">
              <h2 className='text-4xl text-black mb-5'>RECENT BLOGS</h2>
              <div className="h-1 bg-red-400 w-72 mx-auto mb-10"></div>
              <p className='text-sm text-gray-600 mx-auto mb-10 max-w-screen-md'>
                Crafting dynamic and user-friendly websites, delivering Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. mobile applications across platforms, and empowering individuals and teams with essential tech skills through expert-led training at BloomTechnosys.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-center items-center gap-6 px-4 mb-20'>
        {['1.jpg', '2.jpg', '3.jpg'].map((image, index) => (
          <div key={index} className='border-2 border-gray-300 bg-gray-50'>
            <img className='w-[300px] h-[300px] object-cover' src={`./assets/images/Blog/${image}`} alt={`Blog ${index + 1}`} />
            <div className='px-5 py-10'>
              <h2 className='text-md mb-5'>PLEASURE WITHOUT CONSCIENCE</h2>
              <h4 className='text-sm mt-1'>May 15, 2016 /admin/ Co-working</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
