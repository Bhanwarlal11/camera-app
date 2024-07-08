"use client";

import ReactPlayer from "react-player";
import {
  CameraIcon,
  ChevronLeft,
  CircleHelp,
  Flashlight,
  FullscreenIcon,
  Settings,
  VideoIcon,
  VolumeXIcon,
} from "lucide-react";

function RemoteVideoPlayer({ videoDetail }) {
  return (
    <div className="w-fit lg:8/12 rounded-lg overflow-hidden ">
      <div className="flex justify-between items-center mx-10 my-3">
        <button>
          <ChevronLeft />
        </button>
        <p>Device {videoDetail?.id}</p>
        <div className="space-x-5">
          <button>
            <CircleHelp />
          </button>
          <button>
            <Settings />
          </button>
        </div>
      </div>
      <div>
        <ReactPlayer
          url={videoDetail?.url}
          controls
          width="100%"
          height="100%"
          playing={true}
          muted={true}
          className="react-player"
          // config={{
          //   file: {
          //     forceHLS: true,
          //   },
          // }}
        />
      </div>
      <div className="flex items-center justify-between mx-10 mt-6 mb-3">
        <button>SD</button>
        <button>
          <Flashlight />
        </button>
        <button>
          <VolumeXIcon />
        </button>
        <button>
          <CameraIcon />
        </button>
        <button>
          <VideoIcon />
        </button>
        <button>
          <FullscreenIcon />
        </button>
      </div>
    </div>
  );
}

export default RemoteVideoPlayer;
