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
import { ChevronRight, MonitorCheck } from "lucide-react";

function ScreenshotVideoComponent() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
          <div className="flex flex-row items-center justify-center gap-3">
            <MonitorCheck />
            <div>Screenshot video</div>
          </div>
          <ChevronRight />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Please enable storage permission</AlertDialogTitle>
          <AlertDialogDescription>
            Please enable storage permission for screenshot, video recording and
            download video function to save pictures and videos to your phone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>open</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ScreenshotVideoComponent;
