import { ChevronRight, ListOrdered } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function MyOrder() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
          <div className="flex flex-row items-center justify-center gap-3">
            <ListOrdered />
            <div>My Order</div>
          </div>
          <ChevronRight />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>My Order</SheetTitle>
          <SheetDescription>
            Please select the type of order you want to view
          </SheetDescription>
        </SheetHeader>
        <div>
          <div className="flex flex-col text-left gap-2 my-3 bg-orange-400 p-3 rounded-xl text-gray-50 cursor-pointer">
            <h5>Cloud storage order</h5>
            <p className="text-xs">
              View purchased cloud storage order information Details
            </p>
          </div>
          <div className="flex flex-col text-left gap-2 my-3 bg-blue-400 p-3 rounded-xl text-gray-50 cursor-pointer">
            <h5>4G order</h5>
            <p className="text-xs">
              View purchased 4G order information Details
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
