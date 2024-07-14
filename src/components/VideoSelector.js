'use client'

import { sampleVideoUrls } from '@/utils/sampleVideoUrl';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoSelector = () => {
   

  return (
    <div >
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-1">
        {sampleVideoUrls.map((url, index) => (
          <div key={index} className="relative">
            <ReactPlayer url={url} controls width="100%" height="100%" />
            <input
              type="checkbox"
            
              className="absolute top-2 right-2 w-8 h-4 sm:w-4 sm:h-4"
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default VideoSelector;
