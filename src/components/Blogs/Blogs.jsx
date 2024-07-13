import React from 'react';

function Blogs() {
  return (
    <div id="blog">
      <div className='mt-20 mb-20'>
        <div className="flex justify-center items-center">
          <div className="row">
            <div className="main_featured m-top-100">
              <div className="col-sm-12">
                <div className="text-center">
                  <h2 className='text-4xl text-black mb-5'>RECENT BLOGS</h2>
                  <p className="h-1 bg-red-400 w-72 ml-[615px] mb-10"></p>
                  <div className="separator_auto"></div>
                  <p className='text-sm text-gray-600 p-4 ml-80 mr-80'>
                    Crafting dynamic and user-friendly websites, delivering Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. mobile applications across platforms, and empowering individuals and teams with essential tech skills through expert-led training at BloomTechnosys.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex px-20 gap-6 justify-center items-center mb-20'>
        <div className='border-2 border-gray-300 bg-gray-50'>
          <img className='w-[300px] h-[300px] object-cover' src="./assets/images/Blog/1.jpg" alt="" />
          <div className='px-5 py-10'>
            <h2 className='text-md mb-5'>PLEASURE WITHOUT CONSCIENCE</h2>
            <h4 className='text-sm mt-1'>May 15, 2016 /admin/ Co-working</h4>
          </div>
        </div>

        <div className='border-2 border-gray-300 bg-gray-50'>
          <img className='w-[300px] h-[300px] object-cover' src="./assets/images/Blog/2.jpg" alt="" />
          <div className='px-5 py-10'>
            <h2 className='text-md mb-5'>PLEASURE WITHOUT CONSCIENCE</h2>
            <h4 className='text-sm mt-1'>May 15, 2016 /admin/ Co-working</h4>
          </div>
        </div>

        <div className='border-2 border-gray-300 bg-gray-50'>
          <img className='w-[300px] h-[300px] object-cover' src="./assets/images/Blog/3.jpg" alt="" />
          <div className='px-5 py-10'>
            <h2 className='text-md mb-5'>PLEASURE WITHOUT CONSCIENCE</h2>
            <h4 className='text-sm mt-1'>May 15, 2016 /admin/ Co-working</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
