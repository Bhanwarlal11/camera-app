// "use client";

// import LiveView from "@/components/LiveView";
// import RemoteVideoPlayer from "@/components/RemoteVideoPlayer";
// import Playback from "@/components/Playback";
// import { Button } from "@/components/ui/button";
// import { sampleVideoUrls } from "@/utils/sampleVideoUrl";
// import { History, Radio } from "lucide-react";
// import { useState } from "react";

// function DeviceID({ params }) {
//   const { deviceID } = params;
//   const currentVideo = sampleVideoUrls.find(
//     (video) => video.id === parseInt(deviceID)
//   );

//   const [isPlayBack, setIsPlayBack] = useState(false);

//   function handleIsPlayBack() {
//     setIsPlayBack(!isPlayBack);
//   }

//   return (
//     <div className=" min-w-full flex flex-col md:flex-row gap-3  md:items-center ">
//       <div className="bg-black text-white w-fit md:w-2/3 ">
//         <RemoteVideoPlayer // srcHd="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
//           // srcSd="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
//           srcHdLive="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
//           srcSdLive="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
//           srcHdPlayback="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
//           srcSdPlayback="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
//         />
//       </div>

//       <span className="fixed bottom-28 right-0 z-10 drop-shadow-md">
//         {isPlayBack ? (
//           <Button
//             onClick={handleIsPlayBack}
//             className="bg-gray-100 text-gray-500 hover:text-white flex flex-row gap-2 rounded-none rounded-l-3xl "
//           >
//             <Radio />
//             <span>LiveView</span>
//           </Button>
//         ) : (
//           <Button
//             onClick={handleIsPlayBack}
//             className="bg-gray-100 text-gray-500 hover:text-white flex flex-row gap-2 rounded-none rounded-l-3xl"
//           >
//             <History />
//             <span>Playback</span>
//           </Button>
//         )}
//       </span>

//       {isPlayBack ? <Playback /> : <LiveView />}
//     </div>
//   );
// }

// export default DeviceID;

"use client";

import HlsPlayer from "@/components/hls-player-component";

const DeviceID = () => {
  return (
    <div className=" min-w-full min-h-screen flex flex-col md:flex-row gap-3  md:items-center ">
      <div className=" w-fit md:w-2/3 flex flex-col md:flex-row min-h-screen min-w-full">
        <HlsPlayer
          // srcHd="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
          // srcSd="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
          srcHdLive="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
          srcSdLive="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
          srcHdPlayback="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
          srcSdPlayback="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
        />
      </div>

      
    </div>
  );
};

export default DeviceID;
