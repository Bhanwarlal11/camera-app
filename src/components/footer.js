import { CalendarDays, Cctv, FileBarChart, User } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-white  fixed bottom-0 left-0 right-0 z-10 px-4 pt-2">
       <ul className=" flex justify-between text-gray-400 ">
          <li className="flex flex-col justify-center items-center text-sm font-mono">
            <Link href={"/device-page"} className="text-gray-400">
              <Cctv />
            </Link>Device
          </li>
          <li className="flex flex-col justify-center items-center text-sm font-mono">
            <Link href={"/events-page"} className="text-gray-400 ">
              <CalendarDays />
            </Link>Events
          </li>
          <li className="flex flex-col justify-center items-center text-sm font-mono">
            <Link href={"/recharge-page"} className="text-gray-400 ">
              <FileBarChart />
            </Link>Recharge
          </li>
          <li className="flex flex-col justify-center items-center text-sm font-mono">
            <Link href={"/me-page"} className="text-gray-400 ">
              <User />
            </Link>Me
          </li>
        </ul>
     
    </div>
  );
}

export default Footer;
