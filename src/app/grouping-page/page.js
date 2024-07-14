"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
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
import VideoSelector from "@/components/VideoSelector";
import { sampleVideoUrls } from "@/utils/sampleVideoUrl";
import { CirclePlus } from "lucide-react";

import React, { useState } from "react";
import ReactPlayer from "react-player";

function GroupingPage() {
  const [selectedVideos, setSelectedVideos] = useState([]);

  const handleVideoSelect = (event) => {
    const files = Array.from(event.target.files);
    setSelectedVideos(files);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex flex-col items-center justify-center my-5">
          <div className="flex flex-col items-center cursor-pointer gap-2 border rounded-xl p-5 hover:bg-gray-100">
            <CirclePlus className="w-8 h-8" />
            <h3>Add Group</h3>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="w-full flex flex-col">
        <SheetHeader>
          <SheetTitle>Select channel</SheetTitle>
        </SheetHeader>

        <ScrollArea>
          <VideoSelector />
        </ScrollArea>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="w-full">Add channel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default GroupingPage;
