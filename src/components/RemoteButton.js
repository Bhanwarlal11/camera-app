'use client'

import { ChevronDown, ChevronLeft, ChevronRight, ChevronsUp, ChevronUp } from 'lucide-react';
import React from 'react';

const RemoteButton = () => {
  const handleButtonClick = (direction) => {
    console.log(`Button ${direction} clicked`);
    // Implement your functionality for each direction here
  };

  return (
    
      <div className="relative w-52 h-52 bg-gray-200 rounded-full flex justify-center items-center drop-shadow-sm hover:drop-shadow-xl">
        
        {/* Top button */}
        <button
          onClick={() => handleButtonClick('top')}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16  rounded-full flex justify-center items-center   active:bg-slate-300"
        >
          
          <ChevronUp className='text-black'/>
        </button>
        {/* Right button */}
        <button
          onClick={() => handleButtonClick('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full flex justify-center items-center   active:bg-slate-300"
        >
          <ChevronRight className="text-black"/>
        </button>
        {/* Bottom button */}
        <button
          onClick={() => handleButtonClick('bottom')}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16  rounded-full flex justify-center items-center active:bg-slate-300"
        >
          {/* <div className="w-4 h-4 bg-gray-500 rounded-full"></div> */}
          <ChevronDown className='text-black' />
        </button>
        {/* Left button */}
        <button
          onClick={() => handleButtonClick('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full flex justify-center items-center active:bg-slate-300"
        >
          <ChevronLeft className="text-black"/>
        </button>
      </div>
    
  );
};

export default RemoteButton;
