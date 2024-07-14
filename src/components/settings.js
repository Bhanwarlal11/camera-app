import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Settings,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SettingsComponent() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
          <div className="flex flex-row items-center justify-center gap-3">
            <Settings />
            <div>Settings</div>
          </div>
          <ChevronRight />
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-3">
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
        </SheetHeader>
        {/* hard decoding */}
        <div className="flex flex-row justify-between">
          <Label htmlFor="hard-decoding">Hard decoding</Label>
          <Switch id="hard-decoding" />
        </div>

        {/* preview mode */}
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Preview mode" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select preview mode</SelectLabel>
              <SelectItem value="live">Live</SelectItem>
              <SelectItem value="banana">Fluency</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* notifaction banner */}
        <div className="flex flex-row justify-between">
          <Label htmlFor="notifaction-banner">Notification banner</Label>
          <Switch id="Notification-banner" />
        </div>

        {/* screen brightnees */}
        <div className="flex flex-row justify-between">
          <Label htmlFor="screen-brightness">Screen brighness</Label>
          <Switch id="screen-brightness" />
        </div>
        {/* vibration */}
        <div className="flex flex-row justify-between">
          <Label htmlFor="vibration">vibration</Label>
          <Switch id="vibration" />
        </div>
        {/* upload cash file */}
        <div className="flex flex-row justify-between">
          <p className="font-semibold">Upload crash file</p>
          <ChevronRight className="text-gray-400" />
        </div>

        {/* clear cache */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="flex flex-row justify-between">
              <p className="font-semibold">Clear cache</p>
              <ChevronRight className="text-gray-400" />
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                No loss of your device data and personal information after
                clearing the cache
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="text-red-600 bg-white border">
                Clean up immediately
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        {/* delete account */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="flex flex-row justify-between">
              <p className="font-semibold">Delete Account</p>
              <ChevronRight className="text-gray-400" />
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Account</AlertDialogTitle>
              <AlertDialogDescription>
                After deleted account, data will not be restored
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="text-white bg-red-500 border">
                Apply for delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        {/* AD SWITCH */}
        <div className="flex flex-row justify-between">
          <Label htmlFor="ad-switch">AD switch</Label>
          <Switch id="ad-switch" />
        </div>
        {/* logout */}
        <SheetFooter>
          <SheetClose asChild>
            <Button
              type="submit"
              className="bg-gray-200 text-red-600 w-full hover:bg-gray-400 "
            >
              Log out
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
