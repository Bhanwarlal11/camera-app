"use client";

import EventPageHeader from "@/components/EventsPage-components/EventPageHeader";
import EventsComponent from "@/components/EventsPage-components/Events";
import NotificationComponent from "@/components/EventsPage-components/Notification";
import { sampleVideoUrls } from "@/utils/sampleVideoUrl";
import { useState } from "react";
import { MdRunCircle } from "react-icons/md";
import ReactPlayer from "react-player";

export default function EventPage() {

  const [activeTab, setActiveTab] = useState("Events");

  const renderComponent = () => {
    switch (activeTab) {
      case "Events":
        return <EventsComponent />;
      case "Notifications":
        return <NotificationComponent />;
      default:
        return <EventsComponent />;
    }
  }


  return (
    <div>
    <EventPageHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>{renderComponent()}</main>
    </div>
  );
}
