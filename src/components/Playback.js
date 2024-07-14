import { FileBarChart2 } from "lucide-react";
import { Button } from "./ui/button";
import { DateComponent } from "./DateComponent";

function Playback() {
  return (
    <div className="flex flex-col gap-3 flex-1 bg-slate-100 md:p-4 md:rounded-lg md:drop-shadow-lg md:hover:drop-shadow-2xl">
      <div className="flex flex-row  justify-between mx-2 md:mx-0">
        <p className="text-black text-lg font-semibold">Playback</p>
        <Button className="px-3  text-lg  rounded-3xl">
          <FileBarChart2 className="w-5 h-5" />
          SD
        </Button>
      </div>

      {/* date */}

      <DateComponent />

      {/* timeline */}
      <div className=" min-h-32 bg-yellow-600 text-white text-center flex flex-col justify-center">
        Timeline
      </div>

      <div className="flex flex-row justify-center gap-3">
        <div className="flex flex-row gap-2 items-center">
          <div className="bg-yellow-500 w-3 h-3 rounded-full"> </div>
          <span>Screen movement</span>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="bg-green-500 w-3 h-3 rounded-full"> </div>
          <span>Human appears</span>
        </div>
      </div>
    </div>
  );
}

export default Playback;
