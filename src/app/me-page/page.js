"use client";
import {
  ChevronRight,
  Headset,
  History,
} from "lucide-react";



import Profile from "@/components/profile";

import SettingsComponent from "@/components/settings";
import MyOrder from "@/components/MyOrder";
import DemoCenterComponent from "@/components/demoVideo";
import ScreenshotVideoComponent from "@/components/ScreenShotVideo";
import SharingManagementComponent from "@/components/SharingManagement";
import SystemAuthoritySettings from "@/components/SystemAuthoritySettings";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

function MePage() {
  return (
    <div className="min-h-screen min-w-full">
      {/* profile component*/}
      <Profile />

      <div className="flex flex-col gap-2 min-h-full">
        {/* settings  component*/}
        <SettingsComponent />

        {/* my order component*/}

        <MyOrder />

        {/* demo center */}
        <DemoCenterComponent />

        {/* screenshot video */}
        <ScreenshotVideoComponent />

        {/* sharing management */}
        <SharingManagementComponent />

        {/* help and live chat */}
        <div className="bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
          <div className="flex flex-row items-center justify-center gap-3">
            <Headset />
            <div>Help and Live Chat</div>
          </div>
          <ChevronRight />
        </div>

        {/* System authority settings */}

        <SystemAuthoritySettings />

        {/* privacy policy */}

        <PrivacyPolicy />

        {/* Version */}

        <Popover>
          <PopoverTrigger asChild>
            <div className="bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
              <div className="flex flex-row items-center justify-center gap-3">
                <History />
                <div>Version: 9.8.5.8</div>
              </div>
              <ChevronRight />
            </div>
          </PopoverTrigger>
          <PopoverContent >
            It is newest version
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default MePage;
