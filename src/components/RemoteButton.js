'use client'

import { ChevronDown, ChevronLeft, ChevronRight, ChevronsUp, ChevronUp } from 'lucide-react';
import React from 'react';

const RemoteButton = () => {
  const handleButtonClick = (direction) => {
    console.log(`Button ${direction} clicked`);
    // Implement your functionality for each direction here
  };

  return (
    
      <div className="relative w-52 h-52 bg-gray-200 rounded-full flex justify-center items-center">
        
        {/* Top button */}
        <button
          onClick={() => handleButtonClick('top')}
          className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gray-500 rounded-full flex justify-center items-center hover:bg-gray-800"
        >
          
          <ChevronUp className='text-white'/>
        </button>
        {/* Right button */}
        <button
          onClick={() => handleButtonClick('right')}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-500 rounded-full flex justify-center items-center hover:bg-gray-800"
        >
          <ChevronRight className="text-white"/>
        </button>
        {/* Bottom button */}
        <button
          onClick={() => handleButtonClick('bottom')}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gray-500 rounded-full flex justify-center items-center hover:bg-gray-800"
        >
          {/* <div className="w-4 h-4 bg-gray-500 rounded-full"></div> */}
          <ChevronDown className='text-white' />
        </button>
        {/* Left button */}
        <button
          onClick={() => handleButtonClick('left')}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-500 rounded-full flex justify-center items-center hover:bg-gray-800"
        >
          <ChevronLeft className="text-white"/>
        </button>
      </div>
    
  );
};

export default RemoteButton;
