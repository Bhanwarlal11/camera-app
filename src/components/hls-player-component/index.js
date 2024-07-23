import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import screenfull from "screenfull";
import {
  CameraIcon,
  CircleStop,
  Expand,
  VideoIcon,
  Volume2,
  VolumeX,
  Flashlight,
  FlashlightOff,
  Repeat,
  Radio,
  History,
  ChevronLeft,
  CircleHelp,
  Settings,
  Download, // Make sure you import this or the correct icon for downloading clips
} from "lucide-react";
import { Button } from "../ui/button";
import Playback from "../Playback";
import LiveView from "../LiveView";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { DeviceSettings } from "../DevicePage-components/DeviceSettings";

const HlsPlayer = ({ srcHdLive, srcSdLive, srcHdPlayback, srcSdPlayback }) => {
  const videoRef = useRef(null);
  const [isHd, setIsHd] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1.0);
  const [popUpMessage, setPopUpMessage] = useState("");
  const [isTorchOn, setIsTorchOn] = useState(false);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const [showAllZoomLevels, setShowAllZoomLevels] = useState(false);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    let hls;
    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(
        isLive
          ? isHd
            ? srcHdLive
            : srcSdLive
          : isHd
          ? srcHdPlayback
          : srcSdPlayback
      );
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = isLive
        ? isHd
          ? srcHdLive
          : srcSdLive
        : isHd
        ? srcHdPlayback
        : srcSdPlayback;
      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [isHd, isLive, srcHdLive, srcSdLive, srcHdPlayback, srcSdPlayback]);

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    videoRef.current.muted = !isMuted;
    setPopUpMessage(isMuted ? "Unmuted" : "Muted");
    setTimeout(() => setPopUpMessage(""), 2000);
  };

  const handleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(videoRef.current);
      setPopUpMessage(
        screenfull.isFullscreen ? "Fullscreen" : "Exit Fullscreen"
      );
      setTimeout(() => setPopUpMessage(""), 2000);
    }
  };

  const handleScreenshot = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "screenshot.png";
    link.click();
    setPopUpMessage("Screenshot Taken");
    setTimeout(() => setPopUpMessage(""), 2000);
  };

  const handleRecordToggle = () => {
    if (isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setPopUpMessage("Recording Stopped");
    } else {
      const stream = videoRef.current.captureStream();
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: "video/webm; codecs=vp9",
      });
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, {
          type: "video/webm",
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "recording.webm";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        recordedChunksRef.current = [];
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
      setPopUpMessage("Recording Started");
    }
    setTimeout(() => setPopUpMessage(""), 2000);
  };

  const handleZoomChange = (level) => {
    setZoomLevel(level);
    videoRef.current.style.transform = `scale(${level})`;
    setPopUpMessage(`${level}x Zoom`);
    setTimeout(() => setPopUpMessage(""), 2000);
    setShowAllZoomLevels(false);
  };

  const toggleZoomLevels = () => {
    setShowAllZoomLevels(!showAllZoomLevels);
  };

  const toggleTorch = async () => {
    const video = videoRef.current;
    const stream = video.srcObject;
    if (stream) {
      const track = stream.getVideoTracks()[0];
      const capabilities = track.getCapabilities();
      if (capabilities.torch) {
        const constraints = { advanced: [{ torch: !isTorchOn }] };
        await track.applyConstraints(constraints);
        setIsTorchOn(!isTorchOn);
        setPopUpMessage(isTorchOn ? "Torch Off" : "Torch On");
        setTimeout(() => setPopUpMessage(""), 2000);
      } else {
        setPopUpMessage("Torch not supported on this device");
        setTimeout(() => setPopUpMessage(""), 2000);
      }
    }
  };

  const switchVideoMode = () => {
    setIsLive(!isLive);
    setPopUpMessage(isLive ? "Switched to Playback" : "Switched to Live");
    setTimeout(() => setPopUpMessage(""), 2000);
  };

  function handleBack() {
    window.history.back();
  }

  return (
    <>
   
      <div className="w-full h-full flex flex-col items-center">
        <div className="relative min-w-min bg-black text-white">
          {/* video title container */}
          <div className="flex flex-row justify-between items-center mx-10 my-3 ">
            <button onClick={handleBack}>
              <ChevronLeft />
            </button>
            <p>Device</p>
            <div className="space-x-5">
              <button>
                <CircleHelp />
              </button>
              <button>
            
                <DeviceSettings />
              </button>
            </div>
          </div>

          {/* video player */}
          <div className="video-container relative w-full overflow-hidden bg-black">
            <video
              ref={videoRef}
              className="w-full h-auto"
              controls={false}
              style={{ transform: `scale(${zoomLevel})`, objectFit: "contain" }}
            />
          </div>
          {/* zoom in - zoom out */}
          <div className="bg-black bg-opacity-50 text-white absolute bottom-20 right-0 p-1 flex flex-col gap-2 items-center justify-center space-x-2 rounded-lg font-mono text-sm">
            {showAllZoomLevels ? (
              [1.0, 2.0, 4.0, 8.0].map((level) => (
                <button key={level} onClick={() => handleZoomChange(level)}>
                  {level}.0x
                </button>
              ))
            ) : (
              <button onClick={toggleZoomLevels}>{zoomLevel}.0x</button>
            )}
          </div>
          {popUpMessage && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-blue-100 text-blue-800 p-2 rounded-lg">
              {popUpMessage}
            </div>
          )}

          {/* video control */}
          <div className="flex justify-around p-2 py-4 bg-black bg-opacity-50 ">
            {isLive ? (
              <>
                <button
                  onClick={() => {
                    setIsHd(!isHd);
                    setPopUpMessage(isHd ? "Switched to SD" : "Switched to HD");
                    setTimeout(() => setPopUpMessage(""), 2000);
                  }}
                  className="text-white border rounded-lg px-2"
                >
                  {isHd ? "HD" : "SD"}
                </button>
                <button onClick={toggleTorch} className="text-white">
                  {isTorchOn ? <FlashlightOff /> : <Flashlight />}
                </button>
              </>
            ) : (
              <button
                onClick={() => setPopUpMessage("Downloading Clips")}
                className="text-white border rounded-lg px-2"
              >
                <Download />
              </button>
            )}
            <button onClick={handleMuteToggle} className="text-white">
              {isMuted ? <VolumeX /> : <Volume2 />}
            </button>
            <button onClick={handleScreenshot} className="text-white">
              <CameraIcon />
            </button>
            <button onClick={handleRecordToggle} className="text-white">
              {isRecording ? <CircleStop /> : <VideoIcon />}
            </button>
            <button onClick={handleFullscreen} className="text-white">
              <Expand />
            </button>
          </div>
        </div>
      </div>

      {/* liveView , Playback Container */}
      <span className="fixed bottom-28 right-0 z-10 drop-shadow-md bg-gray-100 ">
        {!isLive ? (
          <Button
            onClick={switchVideoMode}
            className="bg-gray-100 text-gray-500 hover:text-white flex flex-row gap-2 rounded-none rounded-l-3xl "
          >
            <Radio />
            <span>LiveView</span>
          </Button>
        ) : (
          <Button
            onClick={switchVideoMode}
            className="bg-gray-100 text-gray-500 hover:text-white flex flex-row gap-2 rounded-none rounded-l-3xl"
          >
            <History />
            <span>Playback</span>
          </Button>
        )}
      </span>

      {isLive ? <div className="min-h-[400px] flex flex-col items-center justify-center"><LiveView /> </div> : <Playback videoRef={videoRef} />}
  
    </>
  );
};

export default HlsPlayer;
