import { Copy, Image, Pencil } from "lucide-react";
import deviceSettingImage from "@/../public/device-settings.jpg";

function DeviceInfo() {
  return (
    <div>
      <div className="flex flex-row gap-3 items-center bg-white p-4 rounded-xl mt-3">
        <div>
          <Image
            src={deviceSettingImage}
            width={120}
            height={100}
            alt="picture of device"
          />
        </div>
        <div className="flex flex-col  ">
          <div>
            <div className="flex flex-row items-center cursor-pointer mb-1 gap-2">
              <p className="font-bold text-lg m-0">Device 2</p>
              <Pencil className="text-xs font-light w-5 h-5" />
            </div>
            <p className="font-light text-md m-0">Model: VM-72AD210C</p>
            <p className="font-light text-md m-0">Signal: Strong</p>
          </div>
          <div>
            <div className="flex flex-row items-center mt-4 gap-2 cursor-pointer">
              <p className="font-light text-xs m-0  text-gray-600">
                id: 62636257682
              </p>
              <Copy className="text-xs font-light w-3 h-3" />
            </div>
            <p className="font-light text-xs m-0 text-gray-600">
              Firmware:4.2.3.19
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default DeviceInfo;
