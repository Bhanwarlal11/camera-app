
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight, SquareArrowOutUpRight } from "lucide-react";

function SharingManagementComponent() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
          <div className="flex flex-row items-center justify-center gap-3">
            <SquareArrowOutUpRight />
            <div>Sharing management</div>
          </div>
          <ChevronRight />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Share list</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col justify-center items-center mt-20">
            Sorry, Nothing
        </div>
        
      </SheetContent>
    </Sheet>
  );
}

export default SharingManagementComponent;
