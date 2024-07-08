"use client";

import { sampleVideoUrls } from "@/utils/sampleVideoUrl";
import { MdRunCircle } from "react-icons/md";
import ReactPlayer from "react-player";

export default function EventPage() {
  return (
    <div className="grid  gap-4 mt-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      {sampleVideoUrls.map((item) => (
        <div
          key={item?.id}
          className=" flex justify-between items-center border-2 p-1 gap-x-2 "
        >
          <div className="w-1/2 p-2">
            <ReactPlayer
              url={item?.url}
              // controls
              width="100%"
              height="100%"
              muted={true}
              playing={true}
              className="react-player"
              // config={{
              //   file: {
              //     forceHLS: true,
              //   },
              // }}
            />
          </div>
          <div className="flex flex-row items-center justify-between lg:space-x-10 md:space-x-10 px-2">
            <div className="flex flex-col">
              <p className="lg:text-xl md:text-xl lg:font-semibold sm:text-lg md:font-semibold sm:font-normal">Someone is active</p>
              <p className="text-sm text-gray-600">13.11</p>
            </div>

            <MdRunCircle className="text-4xl text-red-400" />
          </div>
        </div>
      ))}
    </div>
  );
}
