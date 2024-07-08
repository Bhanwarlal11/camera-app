"use client";

import "@coreui/coreui/dist/css/coreui.min.css";
import {
  CNavItem,
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilCommentSquare, cilDevices, cilEnvelopeClosed, cilNotes, cilSim, cilUser } from "@coreui/icons";

import { IoMdMenu } from "react-icons/io";
import Link from "next/link";

function Sidebar() {
  return (
    <CSidebar className="border-end h-full " unfoldable>
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand>
          <IoMdMenu className="w-10 h-10 text-gray-500" />
        </CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
       
        <Link href={"/"} className="no-underline hover:underline hover:decoration-slate-500 ">
          <CNavItem href={"/device-page"}>
            <CIcon customClassName="nav-icon" icon={cilDevices} /> Device
          </CNavItem>
        </Link>
        <Link href={"/events-page"} className="no-underline hover:underline hover:decoration-slate-500 ">
          <CNavItem href={"/events-page"}>
            <CIcon customClassName="nav-icon" icon={cilCommentSquare} /> Events
          </CNavItem>
        </Link>
        <Link href={"/notifications-page"} className="no-underline hover:underline hover:decoration-slate-500 ">
          <CNavItem href={"/notifications-page"}>
            <CIcon customClassName="nav-icon" icon={cilEnvelopeClosed} /> Notification
          </CNavItem>
        </Link>
        <Link href={"/recharge-page"} className="no-underline hover:underline hover:decoration-slate-500 ">
          <CNavItem href={"/recharge-page"} >
            <CIcon customClassName="nav-icon" icon={cilSim} /> Recharge
          </CNavItem>
        </Link>
        <Link href={"/me-page"} className="no-underline hover:underline  hover:decoration-slate-500 ">
          <CNavItem href={"/me-page"} >
            <CIcon customClassName="nav-icon" icon={cilUser} /> Me
          </CNavItem>
        </Link>
      </CSidebarNav>
    </CSidebar>
  );
}

export default Sidebar;
