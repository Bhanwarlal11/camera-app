import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Copy, Pencil, Settings } from "lucide-react";
import Image from "next/image";
import DeviceInfo from "../Device-settings-component/DeviceInfo";
import MotionDetection from "../Device-settings-component/MotionDetection";
import { Label } from "../ui/label";
import PushMessageSettings from "../Device-settings-component/PushMessageSettings";
import { ScrollArea } from "@/components/ui/scroll-area.jsx";

export function DeviceSettings() {
  return (
    <Sheet >
      <SheetTrigger>
        <Settings />
      </SheetTrigger>

      <SheetContent className="min-w-full md:min-w-72 lg:min-w-96  bg-gray-200 h-full overflow-y-auto ">
        <ScrollArea>
          <h2 className="text-center space-y-3">Settings</h2>
          {/* device Info */}
          <DeviceInfo />

          {/* motion detection */}
          <Label className="mt-4 ml-3 text-sm font-normal text-gray-700">
            Motion Detection & Notifcations
          </Label>
          <div className="bg-white mt-2 rounded-xl">
            <MotionDetection />
            <PushMessageSettings />
          </div>
          {/* camera setting */}
          <Label className="mt-4 ml-3 text-sm font-normal text-gray-700">
            Camera settings
          </Label>

          <div className="bg-white mt-2 rounded-xl">
            <MotionDetection />
            <PushMessageSettings />
            <MotionDetection />
            <PushMessageSettings />
          </div>

          {/* advanced settings */}
          <Label className="mt-4 ml-3 text-sm font-normal text-gray-700">
            Advanced settings
          </Label>

          <div className="bg-white mt-2 rounded-xl">
            <MotionDetection />
            <PushMessageSettings />
          </div>
          {/* about */}
          <Label className="mt-4 ml-3 text-sm font-normal text-gray-700">
            About
          </Label>
          <div className="bg-white mt-2 rounded-xl">
            <MotionDetection />
            <PushMessageSettings />
            <MotionDetection />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
