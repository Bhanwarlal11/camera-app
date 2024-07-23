"use client";
// import DeviceVideoContainer from "@/components/DeviceVideoContainer";
import DeviceVideoFooter from "@/components/DeviceVideoFooter";
import { sampleVideoUrls } from "@/utils/sampleVideoUrl";
import { useRouter } from "next/navigation";
import { SlOptionsVertical } from "react-icons/sl";
import ReactPlayer from "react-player";
import useWindowSize from "../hooks/useWindowSize";

import { useState } from "react";
import Device from "@/components/DevicePage-components/Device";
import Grouping from "@/components/DevicePage-components/Grouping";
import DeviceHeader from "@/components/DevicePage-components/DeviceHeader";

export default function DevicePage() {

  const [activeTab, setActiveTab] = useState("Device");

  const renderComponent = () => {
    switch (activeTab) {
      case "Device":
        return <Device />;
      case "Grouping":
        return <Grouping />;
      default:
        return <Device />;
    }
  }

  

  // function handleClickedVideo(getClickedVideoID) {
  //   router.push(`/device-page/${getClickedVideoID}`);
  // }

  // const { width } = useWindowSize();

  return (
    <div>
    <DeviceHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>{renderComponent()}</main>
    </div>
  );
}
