import { ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

function PushMessageSettings() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex flex-row p-4 rounded-xl justify-between items-center ">
            <div>Push message settings</div>
            <ChevronRight />
          </div>
        </SheetTrigger>

        <SheetContent className="min-w-full bg-gray-200">
          <SheetHeader className="font-bold text-lg">Push messages</SheetHeader>
          <Label className="mt-4 ml-3 text-sm font-normal text-gray-700">
            Push alarm message
          </Label>
          <div className="bg-white rounded-xl">
            <div className="flex justify-between items-center  p-4 rounded-xl mt-2">
              <Label htmlFor="app-push-alert-message">
                App push alert message
              </Label>
              <Switch id="app-push-alert-message" />
            </div>
            <div className="flex justify-between items-center  p-4 rounded-xl mt-2">
              <Label htmlFor="push-message-settings">
                Notify me only when human appears
              </Label>
              <Switch id="push-message-settings" />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default PushMessageSettings;
