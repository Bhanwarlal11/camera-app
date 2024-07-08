import RemoteButton from "@/components/RemoteButton";
import RemoteVideoPlayer from "@/components/RemoteVideoPlayer";
import { Button } from "@/components/ui/button";
import { sampleVideoUrls } from "@/utils/sampleVideoUrl";
import { History } from "lucide-react";

function DeviceID({ params }) {
  const videoUrl = "https://www.example.com/watch?v=4MoYSpE05Ec";
  const { deviceID } = params;
  const currentVideo = sampleVideoUrls.find(
    (video) => video.id === parseInt(deviceID)
  );

  return (
    <div className="flex flex-col items-center justify-center lg:flex-row  text-white ">
      <div className="bg-black text-gray-300 lg:w-8/12">
        <RemoteVideoPlayer videoDetail={currentVideo} />
      </div>
      <div className=" lg:ml-16 flex flex-col items-center space-y-4 my-5" >
        <RemoteButton />
        <Button className="text-gray-800 text-sm font-normal flex bg-gray-200 hover:text-gray-200 gap-2">
          <History /> 
          <span>Playback</span>
        </Button>
      </div>
    </div>
  );
}

export default DeviceID;
