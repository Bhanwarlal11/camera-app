
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BellDot,
  BookImage,
  Camera,
  ChevronRight,
  MapPin,
  Mic,
  SquareArrowOutUpRight,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function SystemAuthoritySettings() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
          <div className="flex flex-row items-center justify-center gap-3">
            <SquareArrowOutUpRight />
            <div>System authority settings</div>
          </div>
          <ChevronRight />
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center w-full">
        <SheetHeader>
          <SheetTitle>System authority settings</SheetTitle>
          <SheetDescription>
            When using the app, you may get some of the necessary personal
            information to provide relevant basic services.
          </SheetDescription>
        </SheetHeader>
        {/* location */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="w-full bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
              <div className="flex flex-row items-center justify-center gap-3">
                <MapPin className="bg-red-500 rounded-full text-white w-10 h-10 p-1" />
                <div>Location</div>
              </div>
              <ChevronRight />
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Pleae enable camera privileges
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>open</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* microphone */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="w-full bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
              <div className="flex flex-row items-center justify-center gap-3">
                <Mic className="bg-lime-500 rounded-full text-white w-10 h-10 p-1" />

                <div>Mircophone</div>
              </div>
              <ChevronRight />
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Pleae enable Mircophone privileges
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>open</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* notification */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="w-full bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
              <div className="flex flex-row items-center justify-center gap-3">
                <BellDot className="bg-blue-500 rounded-full text-white w-10 h-10 p-1" />

                <div>Notification</div>
              </div>
              <ChevronRight />
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Pleae enable notification privileges
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>open</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/*  Camera*/}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="w-full bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
              <div className="flex flex-row items-center justify-center gap-3">
                <Camera className="bg-yellow-500 rounded-full text-white w-10 h-10 p-1" />
             
                <div>Camera</div>
              </div>
              <ChevronRight />
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Pleae enable camera privileges
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>open</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Album */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="w-full bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
              <div className="flex flex-row items-center justify-center gap-3">
                <BookImage className="bg-indigo-600 rounded-full text-white w-10 h-10 p-1" />
             
                <div>Album</div>
              </div>
              <ChevronRight />
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Pleae enable album privileges
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>open</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

     
      </SheetContent>
    </Sheet>
  );
}

export default SystemAuthoritySettings;
