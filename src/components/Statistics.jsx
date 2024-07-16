import React from "react";

function Statistics() {
  return (
    <div className="flex flex-wrap w-full h-auto justify-around items-center mt-5 mb-20 px-4 md:px-20 lg:px-40">
      <div className="text-2xl w-full sm:w-1/2 lg:w-1/4 text-center p-4">
        <p className="text-4xl mb-5">2342</p>
        <div className="h-1 bg-red-400 w-16 mx-auto mb-8"></div>
        <p className="font-mono text-gray-700">Projects Finished</p>
      </div>
      <div className="text-2xl w-full sm:w-1/2 lg:w-1/4 text-center p-4">
        <p className="text-4xl mb-5">4234</p>
        <div className="h-1 bg-red-400 w-16 mx-auto mb-8"></div>
        <p className="font-mono text-gray-700">Happy Clients</p>
      </div>
      <div className="text-2xl w-full sm:w-1/2 lg:w-1/4 text-center p-4">
        <p className="text-4xl mb-5">4565</p>
        <div className="h-1 bg-red-400 w-16 mx-auto mb-8"></div>
        <p className="font-mono text-gray-700">Hours of Work</p>
      </div>
      <div className="text-2xl w-full sm:w-1/2 lg:w-1/4 text-center p-4">
        <p className="text-4xl mb-5">4566</p>
        <div className="h-1 bg-red-400 w-16 mx-auto mb-8"></div>
        <p className="font-mono text-gray-700">Cups of Coffee</p>
      </div>
    </div>
  );
}

export default Statistics;
