import { CirclePlus } from "lucide-react";
import Link from "next/link";

function DeviceHeader({ activeTab, setActiveTab }) {
  return (
    <div className="bg-[#2F3645] text-gray-400 pt-3  top-0 left-0 right-0 z-10  h-20 md:h-fit">
      <div className=" flex justify-evenly items-center text-xl font-semibold no-underline  ">
        <button onClick={() => setActiveTab("Device")}>
          <h1
            className={`text-lg font-semibold ${
              activeTab === "Device" ? "text-xl font-extrabold text-white" : ""
            }`}
          >
            Device
          </h1>
        </button>

        <button onClick={() => setActiveTab("Grouping")}>
          <h1
            className={`text-lg font-semibold ${
              activeTab === "Grouping"
                ? "text-lg font-extrabold text-white"
                : ""
            }`}
          >
            Grouping
          </h1>
        </button>

        <Link
          href={"/addDevice-page"}
          className="no-underline hover:opacity-70"
        >
          <h1 className="text-xl  text-gray-200">
            <CirclePlus />
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default DeviceHeader;
