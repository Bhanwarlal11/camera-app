const { BiSolidCalendarEvent } = require("react-icons/bi");
const { FaHeartbeat } = require("react-icons/fa");
const { IoMdShare } = require("react-icons/io");
const { PiVideoFill } = require("react-icons/pi");

function DeviceVideoFooter(){
    return <div className="flex items-center justify-between p-2">
    <div className="grid grid-cols-1 place-items-center">
      <FaHeartbeat className="text-orange-500 text-lg"/>
      <label htmlFor="" className="text-xs py-1 ">Recharge</label>
    </div>
    <div className="grid grid-cols-1 place-items-center">
      <BiSolidCalendarEvent className="text-pink-600 text-lg" />
      <label htmlFor="" className="text-xs py-1">Events</label>
    </div>
    <div className="grid grid-cols-1 place-items-center">
      <IoMdShare className="text-violet-400 text-lg"/>
      <label htmlFor="" className="text-xs py-1">Share</label>
    </div>
    <div className="grid grid-cols-1 place-items-center">
      <PiVideoFill className="text-sky-600 text-lg"/>
      <label htmlFor="" className="text-xs py-1">Playback</label>
    </div>
  </div>
}

export default DeviceVideoFooter;