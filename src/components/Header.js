"use client";
import React from "react";
import Link from "next/link";
import { CirclePlus } from "lucide-react";

function Header() {
  
  return (
    <div className="bg-[#2F3645] text-[#EEEDEB] pt-3  top-0 left-0 right-0 z-10">
      <ul className=" flex justify-evenly items-center text-xl font-semibold no-underline  ">
        <li>
          <Link href={"/"} className="no-underline " passHref>
            <h1 className=" text-xl font-semibold text-[#EEEDEB]">Device</h1>
          </Link>
        </li>
        <li>
          <Link
            href={"/grouping-page"}
            className="no-underline hover:opacity-70"
          >
            <h1 className="text-xl font-semibold text-[#EEEDEB]">Grouping</h1>
          </Link>
        </li>
        <li>
          <Link
            href={"/addDevice-page"}
            className="no-underline hover:opacity-70"
          >
            <h1 className="text-xl  font-semibold text-[#EEEDEB]"><CirclePlus /></h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
