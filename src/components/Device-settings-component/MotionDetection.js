import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

function MotionDetection() {
  return (
    <div >
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex flex-row p-4 rounded-xl justify-between items-center ">
            <div>Motion Detection Alert</div>
            <ChevronRight />
          </div>
        </SheetTrigger>

        <SheetContent className="min-w-full bg-gray-200">
          <SheetHeader className="font-bold text-lg">
            Motion Detection Alert
          </SheetHeader>
          <Label className="mt-4 ml-3 text-sm font-normal text-gray-700">
            Motion Detection
          </Label>
          <div className="flex justify-between items-center bg-white p-4 rounded-xl mt-2">
            <Label htmlFor="motion-detection-alert">
              Motion Detection Alert
            </Label>
            <Switch id="motion-detection-alert" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MotionDetection;
