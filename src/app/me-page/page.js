"use client";
import { Button } from "@/components/ui/button";
import {
  BookOpenText,
  ChevronRight,
  EarthLock,
  Headset,
  History,
  ListOrdered,
  MonitorCheck,
  Settings,
  SquareArrowOutUpRight,
} from "lucide-react";

function MePage() {
  return (
    <div className="min-h-screen min-w-full">
      <div className="flex flex-row items-center justify-center w-full gap-5 h-32">
          <div className="font-bold">Hello, user@gmail.com</div>
          <Button className="bg-gray-700">
            Profile
            <ChevronRight />
          </Button>
      </div>

      <div className="flex flex-col gap-2">
        <div className="bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
          <div className="flex flex-row items-center justify-center gap-3">
            <Settings />
            <div>Settings</div>
          </div>
          <ChevronRight />
        </div>
        <div className="bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
          <div className="flex flex-row items-center justify-center gap-3">
            <ListOrdered />
            <div>My Order</div>
          </div>
          <ChevronRight />
        </div>
        <div className="bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
          <div className="flex flex-row items-center justify-center gap-3">
            <BookOpenText />
            <div>Demo center</div>
          </div>
          <ChevronRight />
        </div>
        <div className="bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
          <div className="flex flex-row items-center justify-center gap-3">
            <MonitorCheck />
            <div>Screenshot video</div>
          </div>
          <ChevronRight />
        </div>
        <div className="bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
          <div className="flex flex-row items-center justify-center gap-3">
            <SquareArrowOutUpRight />
            <div>Sharing management</div>
          </div>
          <ChevronRight />
        </div>
        <div className="bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
          <div className="flex flex-row items-center justify-center gap-3">
            <Headset />
            <div>Help and Live Chat</div>
          </div>
          <ChevronRight />
        </div>
        <div className="bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
          <div className="flex flex-row items-center justify-center gap-3">
            <SquareArrowOutUpRight />
            <div>System authority settings</div>
          </div>
          <ChevronRight />
        </div>
        <div className="bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
          <div className="flex flex-row items-center justify-center gap-3">
            <EarthLock />
            <div>Privacy Policy</div>
          </div>
          <ChevronRight />
        </div>
        <div className="bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
          <div className="flex flex-row items-center justify-center gap-3">
            <History />
            <div>Version: 9.8.5.8</div>
          </div>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}

export default MePage;
