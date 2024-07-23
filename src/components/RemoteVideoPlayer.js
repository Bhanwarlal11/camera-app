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
import HlsPlayer from "./hls-player-component";

function RemoteVideoPlayer({ videoDetail }) {
  return (
    <div className="w-fit lg:8/12 rounded-lg overflow-hidden ">
      <div className="flex flex-row justify-between items-center mx-10 my-3">
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
      <HlsPlayer
          // srcHd="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
          // srcSd="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
          srcHdLive="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
          srcSdLive="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
          srcHdPlayback="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
          srcSdPlayback="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
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
