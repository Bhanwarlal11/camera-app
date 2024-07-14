import { BookOpenText, ChevronRight, CircleDot, Video } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function DemoCenterComponent() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
          <div className="flex flex-row items-center justify-center gap-3">
            <BookOpenText />
            <div>Demo center</div>
          </div>
          <ChevronRight />
        </div>
      </SheetTrigger>
      {/* demoCenter component */}
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Demo center</SheetTitle>
        </SheetHeader>
        <div className="bg-gray-100 flex flex-row items-center justify-between px-3 py-3 my-2">
          <div className="flex flex-row items-center justify-center gap-3">
            <Video />
            <div>Teaching video</div>
          </div>
          <ChevronRight />
        </div>
        <hr />
        <div className="grid grid-cols-2 gap-1  p-1  bg-gray-50">
          <div className="flex flex-col gap-1">
            <video className="w-full h-auto rounded-md" controls>
              <source src="/path-to-your-video.mp4" type="video/mp4" />
            </video>
            <p className="text-xs">Networked devices add</p>
          </div>
          <div className="flex flex-col">
            <video className="w-full h-auto rounded-md" controls>
              <source src="/path-to-your-video.mp4" type="video/mp4" />
            </video>
            <p className="text-xs">Device scan QR code add</p>
          </div>
          <div className="flex flex-col">
            <video className="w-full h-auto rounded-md" controls>
              <source src="/path-to-your-video.mp4" type="video/mp4" />
            </video>
            <p className="text-xs">Hotspot Direct Connection add</p>
          </div>
          <div className="flex flex-col gap-1">
            <video className="w-full h-auto rounded-md" controls>
              <source src="/path-to-your-video.mp4" type="video/mp4" />
            </video>
            <p className="text-xs">Remote view add</p>
          </div>
        </div>

        <div className="bg-gray-100 flex flex-row items-center justify-between px-3 py-3 my-2">
          <div className="flex flex-row items-center justify-center gap-3">
            <CircleDot />
            <div>Product Demo</div>
          </div>
          <ChevronRight />
        </div>
        <hr />
        <div className="grid grid-cols-2 gap-1  p-1  bg-gray-50">
          <div className="flex flex-col gap-1">
            <video className="w-full h-auto rounded-md" controls>
              <source src="/path-to-your-video.mp4" type="video/mp4" />
            </video>
            <p className="text-xs">Networked devices add</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
