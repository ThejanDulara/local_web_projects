import React, { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Payments from "./pages/Payments";
import Attendance from "./pages/Attendance";
import Plans from "./pages/Plans";
import Trainers from "./pages/Trainers";
import Reports from "./pages/Reports";

// Placeholders for remaining pages
const PlaceholderPage = ({ title, icon }) => (
  <div
    className="flex flex-col items-center justify-center p-12"
    style={{ display: "flex", flexDirection: "column", height: "100%" }}
  >
    <div
      style={{
        padding: "24px",
        backgroundColor: "var(--bg-card)",
        borderRadius: "50%",
        marginBottom: "24px",
      }}
    >
      {icon}
    </div>
    <h1 className="h1 font-bold mb-4">{title}</h1>
    <p className="text-secondary text-center max-w-md">
      This module is part of the Power House Gym demonstration. In a production
      environment, this would connect to the backend API.
    </p>
  </div>
);

import {
  CalendarCheck,
  Target,
  Contact,
  Dumbbell,
  PackageOpen,
  Megaphone,
  BarChart3,
  Settings,
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "members":
        return <Members />;
      case "payments":
        return <Payments />;
      case "attendance":
        return <Attendance />;
      case "plans":
        return <Plans />;
      case "trainers":
        return <Trainers />;
      case "classes":
        return (
          <PlaceholderPage
            title="Class Schedule"
            icon={<Dumbbell size={64} className="text-warning" />}
          />
        );
      case "inventory":
        return (
          <PlaceholderPage
            title="Inventory & Pro Shop"
            icon={<PackageOpen size={64} className="text-accent" />}
          />
        );
      case "announcements":
        return (
          <PlaceholderPage
            title="Announcements"
            icon={<Megaphone size={64} className="text-danger" />}
          />
        );
      case "reports":
        return <Reports />;
      case "settings":
        return (
          <PlaceholderPage
            title="System Settings"
            icon={<Settings size={64} className="text-muted" />}
          />
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </MainLayout>
  );
}
