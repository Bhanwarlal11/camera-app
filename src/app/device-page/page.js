"use client";
// import DeviceVideoContainer from "@/components/DeviceVideoContainer";
import DeviceVideoFooter from "@/components/DeviceVideoFooter";
import { sampleVideoUrls } from "@/utils/sampleVideoUrl";
import { useRouter } from "next/navigation";
import { SlOptionsVertical } from "react-icons/sl";
import ReactPlayer from "react-player";
import useWindowSize from "../hooks/useWindowSize";
import Header from "@/components/Header";

export default function DevicePage() {
  const router = useRouter();

  function handleClickedVideo(getClickedVideoID) {
    router.push(`/device-page/${getClickedVideoID}`);
  }

  const { width } = useWindowSize();

  return (
    <div>
     {
          width < 993 ? (
            <Header />
          ) : (
            null
          )
        }
      <div className="mt-4 grid lg:grid-cols-4  place-items-center gap-5  md:grid-cols-2 sm:grid-cols-1  mx-3 md:mx-0  mb-1">
        {sampleVideoUrls.map((item) => (
          <div
            key={item?.id}
            className="bg-[#F5F7F8] border rounded-lg  shadow-xl shadow-gray-400 cursor-pointer "
          >
            <div className="flex items-center justify-between px-2 py-2 text-gray-700 text-lg font-semibold">
              <label>Device {item?.id}</label>
              <SlOptionsVertical />
            </div>
            <div onClick={() => handleClickedVideo(item?.id)}>
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

            {/* <DeviceVideoContainer id={item?.id} videoUrl={item?.url} oncli /> */}
            <DeviceVideoFooter />
          </div>
        ))}
      </div>
    </div>
  );
}
