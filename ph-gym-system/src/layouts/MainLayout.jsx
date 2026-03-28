import React, { useState } from "react";
import {
  Menu,
  X,
  Search,
  Bell,
  Settings,
  LogOut,
  LayoutDashboard,
  Users,
  CreditCard,
  CalendarCheck,
  Target,
  Contact,
  Dumbbell,
  PackageOpen,
  Megaphone,
  BarChart3,
  ChevronDown,
} from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
  { id: "members", label: "Members", icon: <Users /> },
  { id: "payments", label: "Payments", icon: <CreditCard /> },
  { id: "attendance", label: "Attendance", icon: <CalendarCheck /> },
  { id: "plans", label: "Plans & Packages", icon: <Target /> },
  { id: "trainers", label: "Trainers", icon: <Contact /> },
  { id: "classes", label: "Classes", icon: <Dumbbell /> },
  { id: "inventory", label: "Inventory", icon: <PackageOpen /> },
  { id: "announcements", label: "Announcements", icon: <Megaphone /> },
  { id: "reports", label: "Reports", icon: <BarChart3 /> },
  { id: "settings", label: "Settings", icon: <Settings /> },
];

export default function MainLayout({ children, activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <div className="app-container">
      {/* Sidebar for Desktop */}
      <aside className={`sidebar ${mobileMenuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <Dumbbell size={28} className="text-accent" />
            <span>
              POWER <span>HOUSE</span>
            </span>
          </div>
          {mobileMenuOpen && (
            <button
              className="btn-icon mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          )}
        </div>

        <div className="sidebar-nav">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`nav-item ${activeTab === item.id ? "active" : ""}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div
          style={{
            padding: "20px",
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <div
            className="nav-item text-danger"
            onClick={() => alert("Logging out...")}
          >
            <LogOut />
            <span>Sign Out</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Header */}
        <header className="top-header">
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              className="btn-icon mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} color="var(--text-primary)" />
            </button>
            <div className="search-bar">
              <Search size={18} color="var(--text-muted)" />
              <input type="text" placeholder="Search members, payments..." />
            </div>
          </div>

          <div className="header-actions">
            <button className="btn-icon" style={{ position: "relative" }}>
              <Bell size={20} />
              <span
                style={{
                  position: "absolute",
                  top: "4px",
                  right: "4px",
                  width: "8px",
                  height: "8px",
                  backgroundColor: "var(--danger)",
                  borderRadius: "50%",
                }}
              ></span>
            </button>
            <div
              className="user-profile"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <div
                style={{ textAlign: "right", display: "none" }}
                className="user-info"
              >
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    color: "var(--text-primary)",
                  }}
                >
                  Admin User
                </div>
                <div
                  style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
                >
                  Manager
                </div>
              </div>
              <img
                src="https://ui-avatars.com/api/?name=Admin+User&background=2e2e2e&color=FFD700"
                alt="Admin"
                className="avatar accent-border"
              />
              <ChevronDown size={16} color="var(--text-muted)" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content">{children}</main>
      </div>

      {/* Overlay for mobile sidebar */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 35,
            display: "block",
          }}
          className="mobile-overlay"
        ></div>
      )}

      {/* Bottom Nav for Mobile */}
      <div className="mobile-bottom-nav">
        {navItems.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className={`mobile-tab ${activeTab === item.id ? "active" : ""}`}
            onClick={() => handleNavClick(item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
        <div className="mobile-tab" onClick={() => setMobileMenuOpen(true)}>
          <Menu />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
