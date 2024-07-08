import { BluetoothSearching, ChevronRight, FileDigit, QrCode, ScanLine, ScanText, Wifi } from "lucide-react";

function AddDevicePage() {
  return (
    <div className="lg:mx-20 mx-3 mt-4 flex flex-col min-h-screen">
      <div className="flex flex-col ">
        <h3 className="text-gray-700">Add device</h3>
        <p className="text-gray-400">Auto-detecting nearby devices</p>
        <div className="flex flex-col items-center justify-center my-4 gap-4">
          <BluetoothSearching className="w-11 h-11" />
          <p className="text-xs text-center mx-12">
            Please power on or reset your device and hold your phone as close
            possible to the device you want to add
          </p>
        </div>
      </div>
      <div class="flex items-center my-4">
        <div class="flex-grow border-t border-gray-300"></div>
        <span class="flex-shrink mx-4 text-gray-500 text-sm">
          More ways to add
        </span>
        <div class="flex-grow border-t border-gray-300"></div>
      </div>

      {/* more way to add */}
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        {/* scan to aadd */}
        <div className="flex flex-row  items-center justify-between gap-3 bg-gray-200 p-2 rounded-lg cursor-pointer">
          <div className="flex flex-row items-center gap-3">
            <ScanLine className="w-12 h-12 " />
            <div className="flex flex-col items-start justify-between">
              <h5 className="text-lg font-semibold">Scan to add</h5>
              <p className="text-xs text-left text-gray-500">
                Scan the device body code with your mobile phone to add
              </p>
            </div>
          </div>
          <ChevronRight className="w-[40px] h-[40px] text-gray-400 " />
        </div>

        {/* camera scan code to add */}
        <div className="flex flex-row  items-center justify-between gap-3 bg-gray-200 p-2 rounded-lg cursor-pointer">
        <div className="flex flex-row items-center gap-3">
        <QrCode className="w-10 h-10 "/>
          <div className="flex flex-col items-start justify-between ">
            <h5 className="text-lg font-semibold">Camera scan code to add</h5>
            <p className="text-xs text-left text-gray-500 ">
              Camera scan APP screen QR code to add
            </p>
          </div>
          </div>
          <ChevronRight className="w-[40px] h-[40px] text-gray-400 " />
        </div>

        {/* camera hostpot add */}
        <div className="flex flex-row  items-center justify-between gap-3 bg-gray-200 p-2 rounded-lg cursor-pointer">
        <div className="flex flex-row items-center gap-3">
            <Wifi className="w-10 h-10" />
          <div className="flex flex-col items-start justify-between">
            <h5 className="text-lg font-semibold">Camera hostpot add</h5>
            <p className="text-xs text-left text-gray-500">
              Mobile phone connection camera hostpot add
            </p>
          </div>
          </div>
          <ChevronRight className="w-[40px] h-[40px] text-gray-400 " />
        </div>

        {/* camera id add */}
        <div className="flex flex-row  items-center justify-between gap-3 bg-gray-200 p-2 rounded-lg cursor-pointer">
        <div className="flex flex-row items-center gap-3">
        <FileDigit className="w-10 h-10"/>
          <div className="flex flex-col items-start justify-between">
            <h5 className="text-lg font-semibold">Camera ID add</h5>
            <p className="text-xs text-left text-gray-500">
              Enter device ID number Add
            </p>
          </div>
          </div>
          <ChevronRight className="w-[40px] h-[40px] text-gray-400 " />
        </div>

        {/* lan scanning */}
        <div className="flex flex-row  items-center justify-between gap-3 bg-gray-200 p-2 rounded-lg cursor-pointer">
        <div className="flex flex-row items-center gap-3">
        <ScanText className="w-10 h-10"/>
          <div className="flex flex-col items-start justify-between">
            <h5 className="text-lg font-semibold">LAN Scanning</h5>
            <p className="text-xs text-left text-gray-500">
              Connect devices on the same network
            </p>
          </div>
          </div>
          <ChevronRight className="w-[40px] h-[40px] text-gray-400 " />
        </div>
      </div>
    </div>
  );
}

export default AddDevicePage;
