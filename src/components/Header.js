"use client";
import React from "react";
import Link from "next/link";
import { CirclePlus } from "lucide-react";
import { useRouter } from "next/navigation";

function Header() {

  const router = useRouter()
  const linkClasses = (path) => (
    router.pathname === path ? 'text-white' : 'text-gray-400'
  );
 
  
  return (
    <div className="bg-[#2F3645] text-[#EEEDEB] pt-3  top-0 left-0 right-0 z-10  h-20 md:h-fit">
      <div className=" flex justify-evenly items-center text-xl font-semibold no-underline  ">
        
          <Link href={"/"} className="no-underline active:text-green-500" passHref>
            <h1 className=" text-xl font-semibold text-[#EEEDEB] ">Device</h1>
            {/* <h1 className={`${linkClasses('/')} hover:text-white`}>Device</h1> */}
          </Link>
        
          <Link
            href={"/grouping-page"}
            className="no-underline hover:opacity-70"
          >
            <h1 className="text-xl font-semibold text-[#EEEDEB]">Grouping</h1>
          </Link>
       
          <Link
            href={"/addDevice-page"}
            className="no-underline hover:opacity-70"
          >
            <h1 className="text-xl  font-semibold text-[#EEEDEB]"><CirclePlus /></h1>
          </Link>
       
      </div>
    </div>
  );
}

export default Header;
