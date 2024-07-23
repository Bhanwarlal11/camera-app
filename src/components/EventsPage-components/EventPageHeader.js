import { EllipsisVertical, MoonStar } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

function EventPageHeader({ activeTab, setActiveTab }) {
  return (
    <div className=" text-gray-500 pt-3 flex flex-row justify-between items-center">
      <div className=" flex justify-between gap-5 items-center text-xl font-semibold no-underline ml-5 ">
        <button onClick={() => setActiveTab("Events")}>
          <h1
            className={`text-lg font-semibold ${
              activeTab === "Events"
                ? "text-xl font-extrabold text-blue-600"
                : ""
            }`}
          >
            Events
          </h1>
        </button>

        <button onClick={() => setActiveTab("Notifications")}>
          <h1
            className={`text-lg font-semibold ${
              activeTab === "Notifications"
                ? "text-lg font-extrabold text-blue-600"
                : ""
            }`}
          >
            Notifications
          </h1>
        </button>
      </div>
      <div className="flex flex-row gap-3 mr-2 items-center">
        {/* Do not disturb */}

        <Drawer>
          <DrawerTrigger>
            <MoonStar />
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex flex-col mx-5">
              <DrawerHeader>
                <DrawerTitle>Turn on Do Not Disturb</DrawerTitle>
                <DrawerDescription>
                  During this period, you will not receive any notifications.but
                  you can still view the alam message record
                </DrawerDescription>
              </DrawerHeader>
              <RadioGroup
                defaultValue="30minute"
                className="flex flex-col gap-4"
              >
                <div className="flex flex-row items-center justify-between ">
                  <Label htmlFor="30minute">30 minute</Label>
                  <RadioGroupItem value="30minute" id="30minute" />
                </div>
                <div className="flex flex-row items-center justify-between ">
                  <Label htmlFor="1hour">1 hour</Label>
                  <RadioGroupItem value="1hour" id="1hour" />
                </div>
                <div className="flex flex-row items-center justify-between ">
                  <Label htmlFor="2hour">2 hour</Label>
                  <RadioGroupItem value="2hour" id="2hour" />
                </div>
              </RadioGroup>

              <DrawerFooter>
                <DrawerClose className="flex flex-row justify-between">
                  <Button>Submit</Button>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>

        <EllipsisVertical />
      </div>
    </div>
  );
}

export default EventPageHeader;
