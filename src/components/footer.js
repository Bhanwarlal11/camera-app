'use client'
import useCurrentPath from "@/app/hooks/useCurrentPath";
import { CalendarDays, Cctv, FileBarChart, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

function Footer() {
  

  const currentPath = usePathname()



  const getLinkClasses = (path) => {
    return currentPath === path ? 'text-blue-400 font-semibold ' : 'text-gray-400'
  }
  
 


  return (
    <div className="bg-slate-100  fixed bottom-0 left-0 right-0 z-10 px-4 pt-2">
      <ul className=" flex justify-between text-gray-400 ">
        <li className="flex flex-col justify-center items-center text-sm font-mono">
          <Link
            href={"/device-page"}
            className={getLinkClasses('/device-page')}  
          >
            <Cctv />
          </Link>
          <span className={getLinkClasses('/device-page')}>Device</span>
        </li>
        <li className="flex flex-col justify-center items-center text-sm font-mono">
          <Link href={"/events-page"} className={getLinkClasses('/events-page')}>
            <CalendarDays />
          </Link>
          <span className={getLinkClasses('/events-page')}>Events</span>
        </li>
        <li className="flex flex-col justify-center items-center text-sm font-mono">
          <Link href={"/recharge-page"} className={getLinkClasses('/recharge-page')}>
            <FileBarChart />
          </Link>
          <span className={getLinkClasses('/recharge-page')}>Recharge</span>
        </li>
        <li className="flex flex-col justify-center items-center text-sm font-mono">
          <Link href={"/me-page"} className={getLinkClasses('/me-page')}>
            <User />
          </Link>
          <span className={getLinkClasses('/me-page')}>Me</span>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
