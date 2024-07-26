import { useState, useEffect } from 'react';
import { FileBarChart2 } from "lucide-react";
import { Button } from "./ui/button";
import { DateComponent } from "./DateComponent";

function Playback({ videoRef }) {
  const [sliderValue, setSliderValue] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      const handleLoadedMetadata = () => {
        setDuration(videoRef.current.duration);
      };

      const handleTimeUpdate = () => {
        setSliderValue(videoRef.current.currentTime);
      };

      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);

      // Cleanup event listeners on component unmount
      return () => {
        // videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        // videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [videoRef]);

  const handleSliderChange = (e) => {
    const newTime = e.target.value;
    setSliderValue(newTime);
    videoRef.current.currentTime = newTime;
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col gap-3 flex-1 pt-3 bg-slate-100 md:p-4 md:rounded-lg md:drop-shadow-lg md:hover:drop-shadow-2xl">
      <div className="flex flex-row  justify-between mx-2 md:mx-0">
        <p className="text-black text-lg font-semibold">Playback</p>
        <Button className="px-3  text-lg  rounded-3xl">
          <FileBarChart2 className="w-5 h-5" />
          SD
        </Button>
      </div>

      {/* Date */}
      <DateComponent />

      {/* Timeline */}
      <div className="min-h-32 bg-blue-300 text-white text-center flex flex-col justify-center p-4">
        <input
          type="range"
          min="0"
          max={isNaN(duration) ? 0 : duration}
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full"
        />
        <p>{`Current Time: ${formatTime(sliderValue)} / ${isNaN(duration) ? '00:00:00' : formatTime(duration)}`}</p>
      </div>

      <div className="flex flex-row justify-center gap-3">
        <div className="flex flex-row gap-2 items-center">
          <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
          <span>Screen movement</span>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="bg-green-500 w-3 h-3 rounded-full"></div>
          <span>Human appears</span>
        </div>
      </div>
    </div>
  );
}

export default Playback;
